# Example monorepo setup

This repository contains an example monorepo setup utilising Create React App, TypeScript and Babel macros.

The React apps (located in <root>/apps) utilise a custom Babel preset in order to enable the use of Babel macros from within the monorepo packages. The only change required in comparison to the default `babel-preset-react-app` is the addition of the `babel-plugin-macros` plugin to [dependencies.js](https://github.com/nikovanmeurs/lerna-create-react-app-typescript/blob/master/packages/babel-preset-react-app/dependencies.js#L106).
