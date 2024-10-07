import { createGlobalStyle } from 'styled-components'
import { themes } from './variables'

const themeValues = Object.entries(themes)

const colorVariables = themeValues
  .map(
    ([theme, values]) => `
:root[data-theme='${theme}'] {
${Object.entries(values)
  .map(
    ([color, value]) => `
  --${color}-rgb: ${value};
  --${color}: rgb(${value});`
  )
  .join('')}
}`
  )
  .join('')

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${colorVariables}

html {
  height: 100%;
  scroll-behavior: smooth;
  scrollbar-color: var(--neutral-400) var(--neutral-50) ;

  ::-webkit-scrollbar {
  width: 5px; 
  height: 7px;
}

::-webkit-scrollbar-thumb {
  background-color: #1e202a;
  outline: 1px solid #1e202a;
  border-radius: 50px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
}
}

body {
  min-height: 100%;
  line-height: 1.5;
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  background-color: var(--neutral-0);
  color: var(--neutral-950);
}



img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  font-style: italic;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

code,
kbd,
samp {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

hr {
  all: unset;
  display: block;
  height: 1px;
  width: 100%;
  background: currentColor;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.mb-32{
  margin-bottom: 32px;
}
.mb-24{
  margin-bottom: 24px;
}
.invoice-btn {
  &.ant-btn-default{
    color: var(--primary-500);
    border: transparent;
    background: var(--neutral-60);
    padding: 8px;
    min-width: 160px;
    &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover{
      background: var(--neutral-200);
    }
  }
  }
  //for chart texts
  .chart-text{
    tspan{
    font-family: "Manrope",sans-serif;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: .4px;
    font-weight: 400;
    font-style:normal;
  }}

  .ant-dropdown-menu{
  background-color: var(--neutral-50);
}

`

export default GlobalStyle
