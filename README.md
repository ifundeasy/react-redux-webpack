# React Redux Webpack: Starter Kit

> Minimal version from original: <https://github.com/wkylin/promotion-web>

## Project features

1. Based on Antd to achieve two sets of themes of bright white and dark
2. Based on the latest version of React, embrace Hooks
3. Based on React Router V6, it is more convenient to implement nested routing
4. Based on the latest version of Webpack, realize multi-environment packaging and deployment, code segmentation optimization, combined with official analysis tools, real-time code optimization
5. Implementing Mock Server based on Faker, it is more convenient to implement mock data without relying on the backend
6. Encapsulate Fetch, implement useFetch, make requests more convenient, cancel requests, implement request and response interception, facilitate data processing and unified error prompts
7. Support TypeScript, everything becomes controllable, stifling errors in the cradle
8. Support multiple tabs to improve efficiency
9. Unified code style, unified project configuration ESLint/Prettier/Husky/EditorConfig
10. Configure Commit message, use standard commit to generate changelog standardization
11. Based on React Redux Hooks, state management is more convenient
12. Implement ErrorBoundary to facilitate locating problems and avoid unpredictable problems that cause system crashes
13. Code splitting, component lazy loading, Loading vertical and horizontal centering
14. For more features, please fork the project, trust me, you will have unexpected gains

## Technology Stack

1. React: v18.x.x [React](https://reactjs.org/)
2. React Router: v6.x.x [React Router](https://reactrouter.com/)
3. Webpack: v5.x.x [Webpack](https://webpack.js.org/)
4. Babel: v7.x.x [Babel](https://babeljs.io/), [Versions](https://babel.docschina.org/versions/)
5. Antd: v4.x.x [Ant Design](https://ant.design/index-cn)
6. React Redux: v8.x.x [Redux Hooks](https://react-redux.js.org/api/hooks)
7. TypeScript: v4.x.x[TypeScript](https://www.typescriptlang.org/)

## Development

```bash
  1. git clone https://github.com/ifundeasy/react-redux-webpack.git
  2. cd react-redux-webpack
  3. You can choose either of the following two ways to start the project, other cli refer to the scripts in package.json
    - npm start
    - npm run dev:faker
```

## VSCode extension: alias path jump

```bash
    "alias-skip.mappings": {
        "@src": "/src",
        "@stateless": "/src/components/stateless",
        "@stateful": "/src/components/stateful",
        "@hooks": "/src/components/hooks",
        "@container": "/src/components/container",
        "@assets": "/src/components/assets",
        '@pages': path.resolve('./src/pages'),
        '@routers': path.resolve('./src/routers'),
        '@utils': path.resolve('./src/utils'),
    }
```

## WebStorm alias jump settings

1. Settings >> Languages ​​& Frameworks >> Javascript >> Webpack: Specify Configuration file: webpack\webpack.common.js

## Generate changelog normalization using standard commits

- [conventional-changelog](https://github.com/conventional-changelog)
- [standard-version](https://github.com/conventional-changelog/standard-version)
- npm install
- package.json
- git commit
- conventional-changelog-cli
- standard-version

  - changes
  - git add . / git cz
  - npm run release

  ```bash
  npm install --save-dev commitizen
  npm install --save-dev cz-conventional-changelog
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
  git add .
  git cz or cz
  npm install -g conventional-changelog-cli
  conventional-changelog -p angular -i CHANGELOG.md -s
  npm install -g standard-version
  "release": "standard-version --tag-prefix \"publish/\""
  ```

## Conventional commit

1. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Commit message

1. The commit message should be structured as follows:

   ```bash
     <type>[optional scope]: <description>
     <BLANK LINE>
     [optional body]
     <BLANK LINE>
     [optional footer(s)]
   ```

2. "type-enum": ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]
3. Type-enum documentation:

   - build: dependency adjustment
     Changes affecting the build system or external dependencies (example scopes: gulp, broccoli, npm)
   - chore: chores
     Other changes that do not modify source or test files
   - ci: script changes
     Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
   - docs: Documentation changes
     Add or update documents
   - feat: add function
     Introduce new features
   - fix bug fixes
     fix bugs
   - perf: performance optimization
     Change the code to improve performance
   - refactor: code refactoring
     Neither bug fixes nor code changes that add features
   - revert: revert version
     revert to previous version
   - style: format adjustment
     Changes that don't affect the meaning of the code (whitespace, missing semicolons in formatting, etc.)
   - test: update test
     Add or update tests

4. [https://www.npmjs.com/package/devmoji](https://www.npmjs.com/package/devmoji)
5. [https://gitmoji.dev/](https://gitmoji.dev/)
6. [git commit toolchain](https://juejin.cn/post/7067166468797890591)
7. [https://theodorusclarence.com/library/conventional-commit-readme](https://theodorusclarence.com/library/conventional-commit-readme)

## React Code Splitting Library

1. [Loadable Components](https://loadable-components.com/)

## Mock Server

```bash
// mock index.js
npm run dev:faker
```

## Deployment

1. Deployment: [Deployment] (<https://create-react-app.dev/docs/deployment>)
2. "build:production": "npm run dev:theme && cross-env BUILD_GOAL=production NODE_ENV=production webpack --config ./webpack/webpack.prod.js --stats-error-details && rimraf dist/\*\*/\_.map",

## To be solved

1. Equipped with relatively complete scaffolding:
   - [https://blog.kiradev.co/build-a-cli-using-nodejs](https://blog.kiradev.co/build-a-cli-using-nodejs)
2. Improve the documentation:
   - [https://docusaurus.io/](https://docusaurus.io/)
   - [https://d.umijs.org](https://d.umijs.org)
   - [Bit](https://bit.dev/)
3. CacheRoute: [react-router-cache-route](https://github.com/CJY0208/react-router-cache-route)

## Docusaurus

1. Github:
2. Demo:

## Supported features

1. TypeScript: [TypeScript](https://www.typescriptlang.org/)
   - [https://react-typescript-cheatsheet.netlify.app/](https://react-typescript-cheatsheet.netlify.app/)
   - [https://usehooks-ts.com/](https://usehooks-ts.com/)
   - [webpack-react-boilerplate](https://github.com/gor918/webpack-react-boilerplate)
   - [https://usehooks.com/](https://usehooks.com/)
   - [https://ahooks.js.org/](https://ahooks.js.org/)
2. Mock Server
   - [Faker](https://fakerjs.dev/)
   - [msw](https://github.com/mswjs/msw)
3. Single-page multi-tab reference
   - [react-antd-multi-tabs-admin](https://github.com/hsl947/react-antd-multi-tabs-admin.git)
4. Axios
   - [Repeated Request Cancellation of Axios Interceptor](https://juejin.cn/post/7004721390767046686)
5. React-SVGR
   - [https://react-svgr.com/docs/webpack/](https://react-svgr.com/docs/webpack/)

## Code Specification: ESLint Prettier Husky EditorConfig

1. ESLint: [ESLint](https://eslint.org/)

   ESLint is a linter for the JavaScript language, written in Node.js. That helps you find and fix problems in your JavaScript code.

   [https://json.schemastore.org/eslintrc](https://json.schemastore.org/eslintrc)

2. Prettier: [Prettier](https://github.com/prettier/prettier)

   Prettier is an opinionated code formatter that formats the code with the help of rules we set.

3. Husky: [Husky](https://github.com/typicode/husky)

   Husky is an NPM package that lets you run a set of commands or script before any git action. For eg pre-push, pre-commit, pre-rebase.

4. Commit Lint: [Commit Lint ](https://commitlint.js.org)

   CommitLint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

5. Editor Config: [EditorConfig](https://EditorConfig.org)
   EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

6. Semantic Versioning: [Semantic Versioning](https://semver.org/)

7. Active hooks:
   [https://typicode.github.io/husky/#/?id=install](https://typicode.github.io/husky/#/?id=install)
8. Prettierrc
   [http://json.schemastore.org/prettierrc](http://json.schemastore.org/prettierrc)
9. Conflict eslint prettier Conditional (ternary) operator

   ```bash
    // lint-staged

    "lint-staged": {
      "**/*": [
        "npm run prettier:fix"
      ],
      "src/**/*.{js, jsx, ts, tsx}": [
        "npm run eslint:fix",
        "npm run prettier:fix"
      ],
      "src/**/*.less": [
        "npm run stylelint:fix",
        "npm run prettier:fix"
      ],
      "*.md": [
        "npm run markdownlint:fix",
        "npm run prettier:fix"
      ]
    },
    // .eslintrc.json
    "extends": ["plugin:react/recommended", "standard", "prettier"],
    // package.json
    "prettier:fix": "prettier --write \"src/**/*\" --end-of-line auto --ignore-unknown",
   ```

## Automated continuous code review tool

1. [DeepSource/](https://deepsource.io/)
2. [DeepScan](https://deepscan.io/)

## VSCode Extensions

1. ErrorLens: [ErrorLens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
2. SonarLint: [https://www.sonarlint.org/](https://www.sonarlint.org/)

## CSS Modules

A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

1. PostCSS: [PostCSS](https://postcss.org/)

2. StyleLint: [StyleLint](https://stylelint.io/)
   npx stylelint --help

## ACSS

1. Windi CSS: [Windi CSS](https://windicss.org/)

2. TailWind CSS: [TailWind CSS](https://tailwindcss.com/)

## CI/CD automated builds

1. GitHub Actions

## Test

1. [Jest](https://jestjs.io/)
2. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
3. [React Hooks Testing Library](https://github.com/testing-library/react-hooks-testing-library)
4. [Cypress](https://www.cypress.io/)

```bash
    1. npm install jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer --save-dev
    2. npm install --save-dev @testing-library/react
    3. npm install cypress --save-dev
    4. npm install --save-dev @testing-library/react-hook
```

## Plugins

1. [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)
2. [react-refresh](https://www.npmjs.com/package/react-refresh)

## HTTP

1. HTTP: [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

## Code Contributors

## [Choose A License](https://choosealicense.com/)

1. [MIT](https://choosealicense.com/licenses/mit/)

## Server: Dev, Test, UAT(Live), Staging, Demo, Production

1. [Server Info](https://www.gratasoftware.com/what-is-each-server-for-development-test-uat-or-staging-demo-and-production/)

Copyright (c) 2021 React Redux Webpack: Starter Kit
Licensed under the [Apache License](https://choosealicense.com/licenses/apache-2.0/).

## NPM version

npm version [| major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=[alpha, beta, rc]] | from-git]

## Git Tag

1. git tag -a v1.2.0 -m "version: 1.2.0"
2. git push origin v1.2.0
3. git push origin --tags

## Nginx

1. [Mac Nginx](https://newbedev.com/how-to-restart-nginx-on-mac-os-x)

   ```bash
    brew install nginx
    brew reinstall nginx

    /usr/local/var/www
    /usr/local/etc/nginx/nginx.conf
    /usr/local/etc/nginx/servers/

    brew services list
    brew services start nginx
    brew services stop nginx
    brew services restart nginx
   ```

2. Nginx.conf

   ```bash
   server {
    listen 8081;
    # server_name localhost;
    server_name www.react-redux-webpack.com;

    location / {
        root /usr/local/var/www/react-redux-webpack;
        index index.html index.htm;
        try_files $uri $uri/ /index.html @rewrites;
        expires -1;
        add_header Cache-Control no-cache;
        # proxy_pass http://localhost:3000;
    }
    # Interface forwarding, if needed
    # location ~ ^/api {
    #   proxy_pass http://www.wklin.com;
    # }
    location @rewrites {
      rewrite ^(.+)$ /index.html break;
    }
    # or redirect all
    # return 301 https://$server_name$request_uri;
   }

    # Add as new host
    192.168.1.101 www.react-redux-webpack.com
   ```

3. Nginx for Windows

   ```bash
      1. start nginx
      2. nginx -s stop
      3. nginx -s quit
      4. nginx -s reload
      5. nginx -s reopen
   ```

## Tree Node Cli

1. npm install -g tree-node-cli
2. Mac: tree -L 2 -I "node_modules" -r -F
3. Win: treee -L 2 -I "node_modules" -r -F
4. tree node

   ```bash
    .
    ├── webpack/
    │   ├── webpack.prod.js
    │   ├── webpack.dev.server.js
    │   ├── webpack.dev.js
    │   ├── webpack.common.js
    │   ├── process.js
    │   ├── paths.js
    │   └── dev.server.js
    ├── src/
    │   ├── utils/
    │   ├── styles/
    │   ├── store/
    │   ├── service/
    │   ├── routers/
    │   ├── reducers/
    │   ├── pages/
    │   ├── index.js
    │   ├── components/
    │   ├── assets/
    │   ├── actions/
    │   └── App.js
    ├── public/
    │   ├── robots.txt
    │   ├── manifest.json
    │   ├── index.ejs
    │   └── favicon.ico
    ├── postcss.config.js
    ├── package.json
    ├── package-lock.json
    ├── faker/
    │   ├── utils/
    │   ├── shops/
    │   ├── index.js
    │   └── app/
    ├── docker-compose.yml
    ├── dist/
    │   ├── static/
    │   ├── index.html
    │   └── favicon.ico
    ├── babel.config.js
    ├── README.md
    ├── Dockerfile
    └── CHANGELOG.md
   ```

## Webpack Analyse

1. [Webpack official analysis tool](https://webpack.github.io/analyse/)

   ```bash
      npm run analyze:build
   ```

## CRACO: Create React App Configuration Override

1. [https://github.com/gsoft-inc/craco](https://github.com/gsoft-inc/craco)

## inconsistent with ESLint style

1. "lint:json": "jsonlint --quiet src/\*_/_.json",
2. "standard": "standard src/\*_/_",
3. "standard:fix": "standard --fix src/\*_/_",
4. rm -rf package-lock.json

## Update npm

```bash
  npm install css-loader@5.2.7 --save-dev
  "webpack-dev-server": "^4.1.1",
  Uncaught TypeError: SocketClient is not a constructor
```

## GitHub Proxy

1. First confirm the way you pull code from git

   ```bash
     git remote -v
   ```

2. Set up the proxy

   ```bash
     git config --global https.proxy 127.0.0.1:10808
     git config --global http.proxy 127.0.0.1:10808
     git config --global http.proxy 'socks5://127.0.0.1:10808'
     git config --global https.proxy 'socks5://127.0.0.1:10808'
   ```

3. Check whether the proxy is successful

   ```bash
     git config --get --global http.proxy
   ```

4. View git configuration

   ```bash
     git config --global --list
   ```

5. Cancel proxy

   ```bash
     git config --global --unset http.proxy
     git config --global --unset https.proxy
   ```

## pm-keeper

1. [https://www.npmjs.com/package/pm-keeper](https://www.npmjs.com/package/pm-keeper)

## npm i && npm ci

1. [npm ci vs. npm install](https://betterprogramming.pub/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26)

## Husky doesn't work solution

Reference official website: [https://typicode.github.io/husky/#/](https://typicode.github.io/husky/#/)
Follow the steps below to set it up:

1. Delete hooks and .husky in the .git directory
2. Check whether the git config configuration exists core.hookspath=.husky

   ```base
     git config --list
   ```

3. Remove configuration and uninstall Huksy:

   ```base
     npm uninstall husky && git config --unset core.hookspath
   ```

4. Install Husky again:

   ```base
     npm install husky --save-dev
     // npm set-script prepare "husky install"
     npx husky-init
   ```

5. Add Hooks:

   ```base
     npx husky add .husky/pre-commit "npx lint-staged"
     npx husky add .husky/pre-commit "npx pretty-quick --staged"
     npx husky add .husky/commit-msg 'npx --no-install commitlint --edit'
   ```

## Show your support

<!-- Give a ⭐️ if this project helped you! -->

If you like the project, give it a star ⭐️, it will be a great encouragement to me.
