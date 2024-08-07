const fs = require('fs-extra');
const Json = require('jsonc-parser');

const typesList = [], modifyList = [], vanillaPathList = [];
let bindingsList = {};
const vanillaElements = {};

function GetJsonUIElements(data, readControl, elementKeyPath) {
    const elements = [];
    if (readControl) {
        for (const e of data) {
            const key = Object.keys(e)[0],
                keyPath = `${elementKeyPath}/${key.split('@')[0]}`;
            elements.push(`"${keyPath}"`);
            const element = e[key];
            if (Array.isArray(element.controls))
                elements.push(...GetJsonUIElements(element.controls, true, keyPath));
        }
    } else {
        const n = data.namespace;
        const nsp = `_${n}`.replace(/_\w/g, v => v.slice(1).toUpperCase());
        delete data.namespace;
        for (const key in data) {
            const element = data[key],
                eKey = key.split('@')[0];

            if (element.anim_type) continue;
            (vanillaElements[nsp] ??= {})[`_${eKey}`.replace(/_\w/g, v => v.slice(1).toUpperCase())] = `${n}.${eKey}`;
            elements.push(`"${eKey}"`);
            if (Array.isArray(element.controls))
                elements.push(...GetJsonUIElements(element.controls, true, eKey));
        }
    }
    return elements;
};

function ReadJsonUIProperty(directory, screenName, typeName) {
    const $ = fs.readFileSync(directory, 'utf-8');
    const $1 = $.match(/#\w+/g) ?? [];
    for (const binding of $1)
        bindingsList[binding.replace(/[_#]\w/g, v => v.slice(1).toUpperCase())] ??= binding;
    const dir = directory.replace(/\.jsonui\//, '');
    if (`ui/${dir}` !== 'ui/_global_variables.json') vanillaPathList.push(`ui/${dir}`);
    typesList.push(`export type ${typeName} = ${GetJsonUIElements(Json.parse($)).join(' | ')};`);
    modifyList.push(`static ${screenName}(element: Types.${typeName}, extend?: string | JsonUIElement, properties?: JsonUIProperty) { return JsonUIObject.register(element, 'ui/${dir}', extend, properties); }`)
};

(function readDirectory(dir = '.jsonui') {
    for (const file of fs.readdirSync(dir, 'utf-8')) {
        const dirFile = `${dir}/${file}`;
        if (fs.statSync(dirFile).isDirectory()) readDirectory(dirFile);
        else if (dirFile !== '.jsonui/_global_variables.json') {
            const directory = dirFile.replace(/\.jsonui\//, ''),
                typeName = `_${directory}`.replace(/.json$/, '').replace(/_\w/g, v => v.slice(1).toUpperCase()).replace(/\//g, '_');

            ReadJsonUIProperty(dirFile, `${typeName}`, typeName);
        }
    };
})();

fs.writeFileSync('src/jsonUITypes/BindingName.ts', `export enum BindingName ${JSON.stringify(bindingsList).replace(/:/g, ' =')};`);
fs.writeFileSync('src/vanillaModification/ScreenModifyTypes.ts', typesList.join(' '));
fs.writeFileSync('src/vanillaModification/Modify.ts',
    `import { JsonUIElement } from "../jsonUI/JsonUIElement"; import { JsonUIProperty } from "../jsonUITypes/JsonUIProperty"; import { JsonUIObject } from "./_ScreenCommon"; import * as Types from "./ScreenModifyTypes"; export class Modify { private static apply() { }; private static arguments = ''; private static bind() { }; private static call() { }; private static caller = ''; private static length = ''; private static name = ''; private static toString() { }; ${modifyList.join(' ')} }`);
fs.writeFileSync('src/vanillaModification/UIPaths.ts', `export const VanillaPaths = ${JSON.stringify(vanillaPathList)};`, 'utf-8');

const globalVariables = Object.keys(Json.parse(fs.readFileSync(`.jsonui/_global_variables.json`, 'utf-8'))).map(
    v => `"${v.replace(/(\$|_)\w/g, v => v.slice(1).toUpperCase())}" = "${v}"`
);

fs.writeFileSync('src/jsonUITypes/GlobalVariable.ts', `export enum GlobalVariable { ${globalVariables.join(', ')} }`)
fs.writeFileSync('src/vanillaModification/vanillaUI.ts', `export const UI = ${JSON.stringify(vanillaElements, null, 4)}`)