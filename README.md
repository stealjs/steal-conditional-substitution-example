# steal-conditional string substitution demo

[![Greenkeeper badge](https://badges.greenkeeper.io/stealjs/steal-conditional-substitution-example.svg)](https://greenkeeper.io/)

Example app using steal-conditional's [string substitution syntax](http://stealjs.com/docs/StealJS.guides.substitution_conditional_loading.html) to perform internationalization

The file structure of this demo looks like this:

```
├── index.html
├── index.js
├── lang.js
├── locale/
│   ├── ar.js
│   ├── en.js
│   ├── es.js
│   ├── hi.js
│   └── zh.js
└── package.json
```

`index.js` is the main module and it uses the `steal-conditional` syntax to load a translation file; `lang.js` is the condition module used to determine _which_ of the translation files (the files inside the `locale` folder) should be loaded when the demo is executed in the browser.

In order to run the demo in your browser follow the steps below:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Open `index.html` in your browser 

![google chrome](https://cloud.githubusercontent.com/assets/724877/22216317/d5caf440-e15b-11e6-8130-b6368710af25.png)

# Building the application

1. Run `npm build`
2. Edit `index.html` to load `steal.production.js`
3. Open in your browser
