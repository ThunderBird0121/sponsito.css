![shokika.css image](https://user-images.githubusercontent.com/3617124/121719822-efa52600-cb1d-11eb-952d-076fee025521.png)

# shokika.css

> A lightly modern reset CSS.

**shokika.css** is a modern CSS library that provides cross-browser default styles.

note: shokika means "initialize" in Japanese.

## Installation

You can install shokika.css using npm, Yarn, or a CDN.

**npm**
```
npm install --save-dev shokika.css
```

**Yarn**
```
yarn add shokika.css
```

**CDN**
```
https://unpkg.com/shokika.css@latest/dist/shokika.min.css
```

## Usage

You can use shokika.css by importing it into your project.

**Import**

```scss
@import '~shokika.css';
```

**HTML**

```html
<link rel="stylesheet" href="https://unpkg.com/shokika.css@latest/dist/shokika.min.css" />
```

## Usage with "CSS in JS"

You can also use shokika.css with "CSS in JS" libraries like Emotion.

```jsx
import { css, Global } from '@emotion/react';
import resetCSS from 'shokika.css/dist/string';

const globalStyle = css`
  ${resetCSS}
`;

export const CSSReset = () => <Global styles={globalStyle} />;
```

### Variations

It is available in node_modules directory:

* `shokika.css`: raw CSS file
* `shokika.min.css`: minified CSS file (recommended for production)

## Support

> **Warning**  
> Support for modern browsers.

shokika.css supports modern browsers, but does not support IE11 or other legacy browsers.
