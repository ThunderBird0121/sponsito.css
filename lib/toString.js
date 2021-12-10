const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "../dist");
const css = fs.readFileSync(path.join(distPath, "shokika.css"), "utf8");
const js = `const cssString = \`${css}\`;
export default cssString;`;

fs.writeFileSync(path.join(distPath, "string.js"), js);
