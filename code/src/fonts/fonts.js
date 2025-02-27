import { createGlobalStyle } from "styled-components"  //Imported createGlobalStyle to be able to use the fonts everywhere

import WrittenLiesWoff from "./WrittenLies.woff"
import WrittenLiesWoff2 from "./WrittenLies.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: "WrittenLies";
        src: local("WrittenLies2"), local("WrittenLies"),
        url(${WrittenLiesWoff2}) format("woff2"),
        url(${WrittenLiesWoff}) format("woff");
        font-weight: 300;
        font-style: normal;
    }
`