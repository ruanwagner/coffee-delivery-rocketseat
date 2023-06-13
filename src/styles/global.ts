import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
    .sm {
        font-size: small;
    }
    .lg {
        font-size: larger;
    }
    .xlg {
        font-size: x-large;
    }
    ::-webkit-scrollbar {
        width: 0.3rem;
    }
    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme['base-label']};
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme['base-hover']};
    }
    .baloo {
        font-family: 'Baloo 2', cursive;
        line-height: 130%;
    }
    .bold {
        font-weight: 700;
    }
    .bolder {
        font-weight: 800;
    }
`
