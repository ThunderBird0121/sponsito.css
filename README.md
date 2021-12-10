![shokika.css image](https://user-images.githubusercontent.com/3617124/121719822-efa52600-cb1d-11eb-952d-076fee025521.png)

# shokika.css

> A lightly modern reset CSS.

**shokika.css** is a modern CSS library that provides cross-browser default styles.

note: shokika means "initialize" in Japanese.

## Installation

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

**Import**

```scss
@import '~shokika.css';
```

**HTML**

```html
<link rel="stylesheet" href="https://unpkg.com/shokika.css@latest/dist/shokika.min.css" />
```

## Usage with "CSS in JS"

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
* `shokika.min.css`: minified CSS file (recommend using production)

## Support

⚠ Support for modern browsers.

This means that IE11 and other legacy browsers will not be supported.
