# Stock Market Recommendation App

There are a few important prerequisites which should be prepared or answered before deployment:

## React Native support for ios

- You must know how to configure and run react native project for ios.
- install dependecies using `yarn install`
- link dependecies using `react-native link`
- DELETE File `ReactNativeNavigationTests` if you encounter "iOS linker error: library not found for -ljschelpers #4691" (https://github.com/wix/react-native-navigation/issues/4691#issuecomment-475929843)


## Available Scripts

In the project directory, you can run:

### `react-native run-ios`

Run an app in iPhone simulator

### `yarn start`

Starts bundler. (by default it will starts when you run `react-native run-ios`)

### `yarn test`

Launches the test runner in the interactive watch mode.

## Folder Structure

The structure of the Valegoo and explanation follows:

```bash
stock-app
├── index.ts        # Application entry point run with "react-native run-ios"
├── app
│   ├── components  # standalone components
│   ├── assets      # fonts and images
│   ├── data        # test data
│   ├── lib         # Define Libraries into this folder.
│   ├── i18n        # localization using i18n-js
│   ├── templates   # Handlebars Templates
│   ├── navigation  # define navigation config and register screens
│   └── screens     # Contains different screens
├── package.json    # Package.json for dependencies
├── ios             # ios specific code
├── android         # android specific code
├── .gitignore      # gitignore
├── inaction.gif    # screen record .gif image
├── .babelrc        # babel configuration
├── app.json        # app config
├── jest.config.js  # jest configuration
├── rn-cli.config.js # typescript config
├── rn-cli.config.js # typescript config
└── README.md
```

## In Action

![](inaction.gif)

