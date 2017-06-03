## vue-scroll-behavior

**Completely customize the scroll behavior on route navigation**

[![Build Status](https://travis-ci.org/jeneser/douban.svg?branch=master)](https://travis-ci.org/jeneser/douban) [![David](https://img.shields.io/david/expressjs/express.svg?style=flat-square)](https://github.com/jeneser/douban) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa2dd7f4191546258edf6e55464d1962)](https://www.codacy.com/app/jeneser/douban?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jeneser/douban&amp;utm_campaign=Badge_Grade) [![Percentage of issues still open](http://isitmaintained.com/badge/open/jeneser/douban.svg)](http://isitmaintained.com/project/jeneser/douban "Percentage of issues still open") [![PR](https://img.shields.io/badge/PR-welcome-brightgreen.svg)](https://github.com/jeneser/douban/pulls) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/jeneser/douban/blob/master/LICENSE)

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+, Edge| &check;| &check; | &check; | &check; | &check; | &check;


## Table of content

- [Demo](#demo)
- [Installation](#installation)
- [Description](#description)
- [Example](#example)
- [Options](#options)
- [Change log](#Change log)
- [Contribute](#Contribute)

## Demo
You can check vue-scroll-behavior demo at **https://jeneser.github.io/douban**

## Installation

#### NPM
```bash
npm install vue-scroll-behavior --save
```

```javascript
import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(vueScrollBehavior)
Vue.vueScrollBehavior(router)
```

#### Direct include

If you are using Vue globally, just include `vue-scroll-behavior.js` and it will automatically install it.

```html
<script src="path/to/vue-scroll-behavior.js"></script>
```

## Description

When using client-side routing, we may want to scroll to top when navigating to a new route, or preserve the scrolling position of history entries just like real page reload does. vue-router allows you to achieve these and even better. But, vue-router scroll behavior feature only works in HTML5 history mode...

**`vue-scroll-behavior` allows you to completely customize the scroll behavior in HTML5 history mode and hash mode.**

## Features

* **Simplicity** - only need to call `Vue.vueScrollBehavior(router)`
* **Compatibility** - Working in HTML5 history mode and hash mode

## Example

For additional examples and detailed description check the demo. **https://jeneser.github.io/douban**

## Options

developing...

## Change log

## Contribute

Please make sure to read the [Contributing Guide](https://github.com/jeneser/vue-scroll-behavior/blob/master/CONTRIBUTING.md) before making a pull request.

## License

[MIT](https://github.com/jeneser/douban/blob/master/LICENSE) Copyright (c) 2017 Jeneser
