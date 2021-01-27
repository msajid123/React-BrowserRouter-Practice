![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)![Branch master](https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square)

This project is based on [React BrowserRouter](https://reactjs.org).

<p align='center'>
<img src='https://raw.githubusercontent.com/msajid123/React-BrowserRouter-Practice/master/Screenshots/Animation.gif' width='600' alt='npm start'>
</p>

## Using Yarn

Read the [Usage Guide](https://yarnpkg.com/en/docs/usage) on our website for detailed instructions on how to use Yarn.

## Contributing to Yarn

Contributions are always welcome, no matter how large or small. Substantial feature requests should be proposed as an [RFC](https://github.com/yarnpkg/rfcs). Before contributing, please read the [code of conduct](CODE_OF_CONDUCT.md).

See [Contributing](https://yarnpkg.com/org/contributing/).

## Prior art

Yarn wouldn't exist if it wasn't for excellent prior art. Yarn has been inspired by the following projects:

 - [Bundler](https://github.com/bundler/bundler)
 - [Cargo](https://github.com/rust-lang/cargo)
 - [npm](https://github.com/npm/cli)

## Running Scripts

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Why Yarn

### Yarn is Super Fast!!
Yarn caches every package it downloads so it never needs to again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.


## Common NPM commands in Yarn

|NPM Command | Yarn Command| Description (_wherever necessary_)|
|:---|:---|---|
|npm install|yarn <br/> yarn install|Will install packages listed in the `package.json` file|
|npm install `pkg-name` <br/> npm install --save `pkg-name`| yarn add `pkg-name`|By default Yarn adds the `pgk-name` to `package.json` and `yarn.lock` files|
|npm install `pkg-name@1.0.0` | yarn add `pgk-name@1.0.0`|
|npm install `pkg-name` --save-dev| yarn add `pkg-name` --dev|
|npm install `pkg-name` --peer| yarn add `pkg-name`--peer|
|npm install `pkg-name` --optional| yarn add --optional|
|npm install -g `pkg-name`| yarn global add `pkg-name`| Careful, yarn add global `pkg-name` adds packages `global` and `pkg-name` locally! |
|npm update | yarn upgrade| Note: It's called **upgrade** in yarn|
|npm uninstall `pkg-name`| yarn remove `pkg-name`|
|npm run `script-name`| yarn run `script-name`|
|npm init | yarn init|
|npm pack | yarn pack| Creates a compressed gzip archive of the package dependencies|
|npm link | yarn link|
|npm outdated | yarn outdated|
|npm publish | yarn publish|
|npm run | yarn run|
|npm cache clean | yarn cache clean|
|npm login | yarn login (and logout)|
|npm test | yarn test|
|npm install --production | yarn --production|
|npm  --version | yarn version|
|npm  info | yarn info|

### New Commands in Yarn
|Yarn Command | Description|
|---|---|
|yarn why `pkg-name` | Builds a dependency graph on why this package is being used|
|yarn clean | Frees up space by removing unnecessary files and folders from dependencies|
|yarn licenses ls | Inspect the licenses of your dependencies|
|yarn licenses generate-disclaimer | Automatically create your license dependency disclaimer|

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## References
https://yarnpkg.com/en/docs/
