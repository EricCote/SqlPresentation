/** @jsx jsx */
import { jsx } from "theme-ui";
import ReactDOM from "react-dom";
import Deck from "@mdxp/core";
import * as components from "@mdxp/components";
import theme from "./theme/theme.js";
import MDXPresentation from "./presentation.mdx";

ReactDOM.render(
  <Deck
    components={components}
    theme={theme}
    layoutOptions={{
      sx: { "& p": { textAlign: "left" }, bg: "aliceblue", alignItems: "stretch", paddingX:'7%' },
    }}
  >
    <MDXPresentation />
  </Deck>,
  document.getElementById("root")
);
