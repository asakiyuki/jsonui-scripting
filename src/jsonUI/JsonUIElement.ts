import { BindingsHandle } from "../builder/Bindings";
import { Config } from "../cached/Config";
import { CachedManager } from "../cached/Manager";
import { CurrentFile, CurrentLine } from "../lib/CurrentLine";
import { BindingInterface } from "../jsonUITypes/BindingInterface";
import { ButtonMapping } from "../jsonUITypes/ButtonMapping";
import { ElementTypes } from "../jsonUITypes/ElementTypes";
import { GetJsonUIGenerateName, GetJsonUIGenerateNames } from "../jsonUITypes/GetJsonUIGenerateName";
import { ElementInterface, InsertElementInterface } from "../jsonUITypes/InsertElementInterface";
import { JsonUIElementInterface, StaticJsonUIElementInterface } from "../jsonUITypes/JsonUIElementInterface";
import { JsonUIProperty } from "../jsonUITypes/JsonUIProperty";
import { Renderer } from "../jsonUITypes/Renderer";
import { Variables } from "../jsonUITypes/Variables";
import { objectForEach, objectMap } from "../lib/ObjectForEach";
import ModifyReadJsonUIProperty from "../lib/ReadJsonUIProperty";
import { Animation } from "./Animation";
import { generateRandomName, getRandomNamespace } from "./GenerateRandomName";
import { ExtendInterface } from "../jsonUITypes/ExtendInterface";
import { ElementButtonInterface } from "../jsonUITypes/elementTypes/Button";
import { ElementCollectionPanelInterface } from "../jsonUITypes/elementTypes/CollectionPanel";
import { ElementCustomInterface } from "../jsonUITypes/elementTypes/Custom";
import { ElementDropdownInterface } from "../jsonUITypes/elementTypes/Dropdown";
import { ElementEditBoxInterface } from "../jsonUITypes/elementTypes/EditBox";
import { ElementFactoryInterface } from "../jsonUITypes/elementTypes/Factory";
import { ElementGirdInterface } from "../jsonUITypes/elementTypes/Gird";
import { ElementImageInterface } from "../jsonUITypes/elementTypes/Image";
import { ElementLabelInterface } from "../jsonUITypes/elementTypes/Label";
import { ElementPanelInterface } from "../jsonUITypes/elementTypes/panel";
import { ElementScreenInterface } from "../jsonUITypes/elementTypes/Screen";
import { ElementScrollbarBoxInterface } from "../jsonUITypes/elementTypes/ScrollbarBox";
import { ElementScrollbarTrackInterface } from "../jsonUITypes/elementTypes/ScrollbarTrack";
import { ElementScrollViewInterface } from "../jsonUITypes/elementTypes/ScrollView";
import { ElementSelectionWheelInterface } from "../jsonUITypes/elementTypes/SelectionWheel";
import { ElementSliderInterface } from "../jsonUITypes/elementTypes/Slider";
import { ElementSliderBoxInterface } from "../jsonUITypes/elementTypes/SliderBox";
import { ElementStackPanelInterface } from "../jsonUITypes/elementTypes/StackPanel";
import { ElementToggleInterface } from "../jsonUITypes/elementTypes/Toggle";
import { ElementInputPanelInterface } from "../jsonUITypes/elementTypes/InputPanel";
import { FactoryInterface } from "../jsonUITypes/Factory";

const cnt: any = {}

/**
 * Class representing a JSON UI element.
 */
export class JsonUIElement {
    private elementJsonUIKey: string;
    private elementType?: ElementTypes;
    private properties: JsonUIProperty = {};

    /**
     * Create a new instance of JsonUIElement.
     * @param data - The initial data for the JSON UI element.
     * @example
     * ```typescript
     * const element = new JsonUIElement({ type: ElementTypes.Panel });
     * ```
     */

    private static apply() { };
    private static arguments = '';
    private static bind() { };
    private static call() { };
    private static caller = '';
    private static length = '';
    private static name = '';
    private static toString() { };

    constructor(private data: JsonUIElementInterface = { type: ElementTypes.Panel }) {
        if (data.extend)
            delete data.type;
        else
            this.elementType = data.type;

        if (Config.data.obfuscate_element_names) {
            data.name = generateRandomName();
            data.namespace = getRandomNamespace();
        } else {
            data.name = data.name || CurrentLine();
            data.namespace = data.namespace || CurrentFile();
        }

        if (data.extend instanceof JsonUIElement) this.elementJsonUIKey = `${data.name}${data.extend.getPath()}`;
        else if (typeof data.extend === 'string') this.elementJsonUIKey = `${data.name}@${data.extend}`;
        else this.elementJsonUIKey = `${data.name}${data.extend ? `@${data.extend?.namespace}.${data.extend?.name}` : ''}`;

        CachedManager.createElement(this, data.namespace, { type: data.type });
        this.setProperty(data.properties || {});
    }


    /**
     * A element container, like ```div``` in HTML.
     * @param properties
     * @param jsonUIElement 
     * @returns 
     */
    static panel(properties: ElementPanelInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Panel,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * 	Similar to ```panel``` but stacks its children depending on ```orientation``` property value
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static stackPanel(properties: ElementStackPanelInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.StackPanel,
            ...jsonUIElement,
            properties
        });
    };

    /**
     * Similar to ```stack_panel```, but does not have the ```orientation``` property
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static collectionPanel(properties: ElementCollectionPanelInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.CollectionPanel,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * A button and it can have 4 states (default, hover, pressed and locked)
     * @param properties 
     * @param jsonUIElement 
     * @returns
     */
    static button(properties: ElementButtonInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Button,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * A toggle and it has 2 states (checked or unchecked). Each state has a hover and locked variant
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static toggle(properties: ElementToggleInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Toggle,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * A input panel
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static inputPanel(properties: ElementInputPanelInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.InputPanel,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * 	Range input element
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static slider(properties: ElementSliderInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Slider,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Text element
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static label(properties: ElementLabelInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Label,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Sprite element. Draws a texture.
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static image(properties: ElementImageInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Image,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Text field element. By default it's single-lined
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static editBox(properties: ElementEditBoxInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.EditBox,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Grid of elements
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static grid(properties: ElementGirdInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Grid,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * A toggle for dropdown purposes
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static dropdown(properties: ElementDropdownInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Dropdown,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * The slider button that you use to change the slider value	Slider Box
Input
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static sliderBox(properties: ElementSliderBoxInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.SliderBox,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Creates a scrolling panel element
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static scrollView(properties: ElementScrollViewInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.ScrollView,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * The scrollbar track
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static scrollbarTrack(properties: ElementScrollbarTrackInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.ScrollbarTrack,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * The scrollbar "thumb"/button. The draggable scrolling handle. By default is oriented vertically
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static scrollbarBox(properties: ElementScrollbarBoxInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.ScrollbarBox,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * A element generator
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static factory(properties: ElementFactoryInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Factory,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Screen element
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static screen(properties: ElementScreenInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Screen,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Special renderer element that is created in the code because it's too complex for JSON UI
     * @param renderer 
     * @param properties 
     * @param jsonUIElement 
     * @returns 
     */
    static custom(renderer: Renderer, property_bag: object, properties: ElementCustomInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.Custom,
            ...jsonUIElement,
            properties: {
                ...properties,
                property_bag,
                renderer
            }
        });
    }

    static selectionWheel(properties: ElementSelectionWheelInterface = {}, jsonUIElement: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            type: ElementTypes.SelectionWheel,
            ...jsonUIElement,
            properties
        });
    }

    /**
     * Create a copy of an element
     * @param jsonUIElement 
     * @param data 
     * @param properties 
     * @returns 
     */
    static extendOf(jsonUIElement: JsonUIElement | ExtendInterface | string, properties: JsonUIProperty = {}, data: StaticJsonUIElementInterface = {}) {
        return new JsonUIElement({
            extend: jsonUIElement,
            ...data,
            properties
        });
    }

    /**
     * Get the unique key for the JSON UI element.
     * @returns The unique key for the JSON UI element.
     */
    getElementJsonUIKey() {
        if (<boolean>arguments[0]) {
            ((cnt[this.data.namespace || ''] ??= {})[this.elementJsonUIKey] ??= -1);
            const count = (cnt[this.data.namespace || ''][this.elementJsonUIKey] += 1);
            const cuccut = this.elementJsonUIKey.split('@');
            cuccut[0] += `[${count}]`;
            return this.elementJsonUIKey = count ? cuccut.join('@') : this.elementJsonUIKey;
        } else return this.elementJsonUIKey;
    }

    /**
     * Get the path of the JSON UI element.
     * @returns The path of the JSON UI element.
     */
    getPath() {
        return `@${this.data.namespace}.${this.elementJsonUIKey.split('@')[0]}`;
    }

    /**
     * Register global variables for the JSON UI element.
     * @param variableObject - The object containing the global variables.
     * @returns The instance of JsonUIElement for method chaining.
     */
    registerGlobalVariable(
        variableObject: object
    ) {
        CachedManager.createGlobalVariables(variableObject);
        return this;
    }

    clone(properties?: JsonUIProperty) {
        return this.elementType
            ? new JsonUIElement({
                type: this.elementType,
                properties: {
                    ...this.properties,
                    ...properties,
                    ...CachedManager.getSpecialProperty(this, this.data.namespace || '')
                }
            }) : JsonUIElement.extendOf(this.getElementJsonUIKey().split('@')[1], {
                ...this.properties,
                ...properties,
                ...CachedManager.getSpecialProperty(this, this.data.namespace || '')
            });
    }

    extend(properties?: JsonUIProperty) {
        return JsonUIElement.extendOf(this, properties);
    }

    /**
     * Add a child element to the JSON UI element.
     * @param value - The value of the child element.
     * @param callback - The callback function to be called after adding the child element.
     * @returns The instance of JsonUIElement for method chaining or the name of the child element.
     * @example
     * ```typescript
     * const childrenElement = new JsonUIElement({ type: ElementTypes.Panel });
     * const parentElement = new JsonUIElement({ type: ElementTypes.Panel });
     * parentElement.addElement(childrenElement);
     * ```
     */
    addElement(
        value?: InsertElementInterface | JsonUIElement | string,
        callback?: GetJsonUIGenerateName
    ) {
        const isElement = value instanceof JsonUIElement;
        const name = (isElement || typeof value === 'string') ? generateRandomName() : value?.name || generateRandomName();
        if (isElement) {
            CachedManager.insertArray('controls', this, this.data.namespace || "", { [`${name}${value.getPath()}`]: {} })
        } else if (typeof value === 'string') {
            this.addElement({
                extend: value,
                name
            });
            return this;
        } else {
            if (value?.extend instanceof JsonUIElement) value.extend = value.extend.getPath().slice(1);
            CachedManager.insertArray('controls',
                this,
                this.data.namespace as string, {
                [`${name}@${value?.extend}`]: {
                    ...ModifyReadJsonUIProperty(value?.properties || {})
                }
            });
        }

        callback?.(this, name);
        return this;
    }

    /**
     * Add an array of child elements to the JSON UI element.
     * @param data - The array of child elements.
     * @param callback - The callback function to be called after adding the child elements.
     * @returns The instance of JsonUIElement for method chaining.
     */
    addElementArray(
        data: JsonUIElement[],
        callback?: GetJsonUIGenerateNames
    ) {
        const name: string[] = [];
        data.forEach(_ => this.addElement(_, (arg, $) => name.push($)));
        callback?.(this, name);
        return this;
    }

    /**
     * Add variables to the JSON UI element.
     * @param data - The variables to be added.
     * @returns The instance of JsonUIElement for method chaining.
     */
    addVariables(
        data: Variables
    ) {
        objectForEach(data, (v, k) => {
            CachedManager.insertArray('variables', this, this.data.namespace || "", {
                requires: ['$', '('].includes(k[0]) ? k : `$${k}`,
                ...objectMap(v, (v, k) => {
                    return {
                        [k.startsWith('$') ? k : `$${k}`]: v
                    }
                })
            });
        });
        return this;
    }

    /**
     * Add keybinds to the JSON UI element.
     * @param data - The keybinds to be added.
     * @returns The instance of JsonUIElement for method chaining.
     */
    addKeybind(
        data: ButtonMapping | ButtonMapping[]
    ) {
        if (Array.isArray(data)) data.forEach(_ => CachedManager.insertArray('button_mappings', this, this.data.namespace || "", _));
        else CachedManager.insertArray('button_mappings', this, this.data.namespace || "", data);
        return this;
    }

    /**
     * Add bindings to the JSON UI element.
     * @param data - The bindings to be added.
     * @returns The instance of JsonUIElement for method chaining.
     */
    addBindings(
        data: (BindingInterface | string | string[])[] | BindingInterface | string
    ) {
        if (Array.isArray(data))
            BindingsHandle(data).forEach(v => CachedManager.insertArray('bindings', this, this.data.namespace || "", v));
        else
            CachedManager.insertArray('bindings', this, this.data.namespace || "", BindingsHandle([data])[0]);
        return this;
    }

    /**
     * Add an animation to the JSON UI element.
     * @param data - The animation to be added.
     * @returns The instance of JsonUIElement for method chaining.
     */
    addAnimation(
        data: (Animation | string)[] | (Animation | string),
        startAtState?: number
    ) {
        if (Array.isArray(data)) {
            data.forEach(v => CachedManager.insertArray('anims', this, this.data.namespace || "", (v instanceof Animation) ? v.getPath(startAtState) : v));
        } else
            CachedManager.insertArray('anims', this, this.data.namespace || "", (data instanceof Animation) ? data.getPath(startAtState) : data);
        return this;
    }

    /**
     * Add a variable to the JSON UI element.
     * @param propertyKey - The key of the property to be updated.
     * @param default_value - The default value of the variable.
     * @param callback - The callback function to be called after adding the variable.
     * @returns The instance of JsonUIElement for method chaining or the name of the variable.
     */
    addVariable(propertyKey: string, default_value: any, callback?: ((arg: JsonUIElement, variable_name: string) => void)) {
        const name = generateRandomName();
        this.setProperty({
            [propertyKey]: `$${name}`,
            [`$${name}|default`]: default_value
        });
        callback?.(this, `$${name}`);
        return this;
    }

    /**
     * Set properties of the JSON UI element.
     * @param data - The properties to be set.
     * @returns The instance of JsonUIElement for method chaining.
     */
    setProperty(
        data: JsonUIProperty
    ) {
        delete this.properties.controls;
        delete this.properties.button_mappings;
        delete this.properties.factory;
        delete this.properties.variables;
        delete this.properties.anims;

        CachedManager.setElementProperty(this, this.data.namespace || "", {
            ...Object.assign(this.properties, data),
        });
        return this;
    }

    setFactory(
        factory_data: FactoryInterface | string,
        control?: (ElementInterface | JsonUIElement | string)
            | {
                [key: string]: (ElementInterface | JsonUIElement | string)

            },
        callback?: GetJsonUIGenerateName
    ) {
        const isControlName = (typeof control === 'string') || (control instanceof JsonUIElement) || (control?.extend);
        this.setProperty({
            factory: {
                ...(() => (typeof factory_data === 'string')
                    ? {
                        name: factory_data
                    }
                    : {
                        name: factory_data.name,
                        max_children_size: factory_data.maxChild
                    })(),
                control_name: (() => {
                    if (isControlName) {
                        const rndName = (<ElementInterface>control)?.name || generateRandomName();
                        callback?.(this, rndName);
                        return (control instanceof JsonUIElement)
                            ? `${rndName}${control.getPath()}`
                            : (typeof control === 'string')
                                ? `${rndName}@${JsonUIElement}`
                                : `${rndName}@${control?.extend}`;
                    }
                })(),
                control_ids: (() => {
                    if (!isControlName) {
                        return <any>objectMap(<any>control, (v, k) => {
                            if (control) {
                                const rndName = (<ElementInterface>v)?.name || generateRandomName();
                                callback?.(this, rndName);
                                return {
                                    [k]: (v instanceof JsonUIElement)
                                        ? `${rndName}${v.getPath()}`
                                        : (typeof v === 'string')
                                            ? `${rndName}@${JsonUIElement}`
                                            : `${rndName}@${v?.extend}`
                                }
                            }
                        })
                    }
                })()
            }
        });
        return this;
    }

    addPropertyBag(propertyBag: object) {
        CachedManager.insertProperty('property_bag', this, this.data.namespace || '', propertyBag);
        return this;
    }

    /**
     * 
     */
    private debug() {
        return CachedManager.debugUI(this.data.namespace || "", this.getElementJsonUIKey());
    }
};