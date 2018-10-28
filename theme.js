import okaidia from "react-syntax-highlighter/styles/prism/duotone-dark";
import prismCss from "react-syntax-highlighter/languages/prism/css";
import prismSass from "react-syntax-highlighter/languages/prism/scss";
import darcula from "prism-react-renderer/themes/duotoneDark";
import { condensed as theme } from "mdx-deck/themes";

const prismStyles = {
  style: {
    ...okaidia
  },
  languages: {
    css: prismCss,
    sass: prismSass
  }
};

export default {
  ...theme,
  prism: prismStyles,
  codeSurfer: darcula
};
