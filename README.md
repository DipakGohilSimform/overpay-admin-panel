This is a React + Ant Design + Styled Components boilerplate.

## Getting Started

- Clone the repo: https://github.com/abhi-simform/react-antd-styled

- Installation
  Run `npm ci` to install the dependencies. This will install the exact version of all the packages that were used while setting up the boilerplate thus avoiding any version incompatibility between packages.

- If you want to update the packages run the below two commands:

```
npm i antd react react-dom react-router-dom styled-components
```

```
npm i --save-dev @chromatic-com/storybook @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/addon-onboarding @storybook/blocks @storybook/react @storybook/react-vite @storybook/test @types/react @types/react-dom @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser @vitejs/plugin-react eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-storybook husky prettier storybook storybook-dark-mode typescript vite vite-tsconfig-paths
```

- Setup husky
  Run `npx husky init` this will initialize husky in our project.
  Open `pre-commit` file which will be inside `.husky` folder and replace `npm run test` to `npm run lint`.

- You are ready to go. Run `npm run dev` to start the local server.
