# react-struct
Create new minimal webpack/babel react project with router and screens structure.

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
