# react-struct
Create new minimal webpack/babel react project with router and screens structure.

## Install
You can create a project by installing it globally or using `npx`:
1. `npm i -g react-struct`
2. `npx react-struct`

This will create project with name `react-struct`. Pass `-n your-project-name` to name it differently.

After this, just go into your project and install npm modules `cd your-project-name && npm i`.

After installation is done and you installed npm modules, you can open up the project in your favorite editor.

### Editor
#### 1. VS Code
To be ready for your new project install following extensions:
1. https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint: this will make editor complain when you write ugly code (options are set in `.eslintrc.yaml`)
2. https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest: with this extension you can see whether your tests work or not while you type
3. https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode: `⌥ + SHIFT + F` to prettify your code (options are set in `.prettierrc.yaml`)


### Why?
After starting so many React projects I always feel repeating myself with same or similar boilerplate code that it became annoying.
So I decided to create this boilerplate and maintain it with new practices I come up with.

### Contents
Lately I started to like "screens" folder structure explained [here](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346).
This package follows the same logic.
Routes config is managed in `./src/config/routes` which is then transformed into list of `<Route>` components from `./src/utils/utils`. Routes are then spread in `./src/index.js`.

It's just a simple app with react-router with Home, About, Blog, Post `/post/:id` empty pages, [Layout](https://github.com/markzero/react-struct/blob/master/src/shared/components/Layout/index.js) and [Header](https://github.com/markzero/react-struct/blob/master/src/shared/components/Header/index.js) components.

For starting a project I suggest just emptying `src/` folder and start your own app. Source code is there only to demonstrate screens hierarchy.

### Tools
Webpack, Babel, ESLint, Prettier, Jest, Husky, lint-staged.

### Commands
* `npm start` starts webpack-dev-server
* `npm test` runs tests
* `npm run lint` runs lint
* `npm run clean` cleans the `dist` folder
* `npm run dev` builds for development
* `npm run build` builds for production
