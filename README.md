# Minecraft Scripting UI

 Create your UI Resource Packs for Minecraft Bedrock with JavaScript/TypeScript!

# Installation
To install the required dependencies, run the following command in your project directory:
```bat
npm install jsonui-scripting
```
This will add jsonui-scripting to your project's package.json file and download the package into your node_modules directory.

# How to use

The syntax is very simple, I can provide an example using code snippets displaying 'Hello World!' text on the Start Screen as follows:
```javascript
// app.js
const { JsonUIElement, Modify } = require('jsonui-scripting');
const a = JsonUIElement.label({
    properties: {
        text: 'Hello World!'
    }
});
Modify.startScreen('start_screen_content')
    .insertBack('controls', a);
```

And the code snippet you will receive in JsonUI format will be as follows after you run app.js:

```jsonc
// start_screen.json
{
    "start_screen_content": {
        "modifications": [
            {
                "array_name": "controls",
                "operation": "insert_back",
                "value": [
                    {
                        "1929e3d2d01c2d0cafdd005f7@ba42e09397f7bab940f0bd27f.1929e3d2d01c2d0cafdd005f7": {}
                    }
                ]
            }
        ]
    }
}
```
```jsonc
// build/ba42e09397f7bab940f0bd27f.json
{
    "namespace": "ba42e09397f7bab940f0bd27f",
    "1929e3d2d01c2d0cafdd005f7": {
        "type": "label",
        "text": "Hello World!"
    }
}
```

# Config.json
You can also create a config.json file in your project so that when the JsonUI pack is built, it will be installed into the game.
```json
{
    // Specifies the name of the folder where the UI pack will be output.
    "folder_name": "output_ui_pack",
    // Indicates whether the UI pack should be previewed.
    "preview": true,
    // Indicates whether the UI pack is in development mode.
    "development": true,
    // Indicates whether element names should be obfuscated in the UI pack.
    "obfuscator_element_name": false,
    // Contains the manifest information of the UI pack.
    "manifest": {
        // Specifies the name of the UI pack.
        "name": "pack_name",
        // Specifies the version of the UI pack.
        "version": [
            1,
            0,
            0
        ],
        // Specifies the UUID of the UI pack.
        "uuid": "********-****-****-****-************",
        // Provides a description of the UI pack.
        "description": "pack_decscription"
    }
}
```