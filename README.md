## vue-scroll-behavior

**Customize the scrolling position on route navigation**

[![npm version](https://badge.fury.io/js/vue-scroll-behavior.svg)](https://badge.fury.io/js/vue-scroll-behavior) [![Build Status](https://travis-ci.org/jeneser/vue-scroll-behavior.svg?branch=master)](https://travis-ci.org/jeneser/vue-scroll-behavior) [![David](https://img.shields.io/david/expressjs/express.svg?style=flat-square)](https://github.com/jeneser/douban) [![Percentage of issues still open](http://isitmaintained.com/badge/open/jeneser/vue-scroll-behavior.svg)](http://isitmaintained.com/project/jeneser/vue-scroll-behavior "Percentage of issues still open") [![PR](https://img.shields.io/badge/PR-welcome-brightgreen.svg)](https://github.com/jeneser/vue-scroll-behavior/pulls) [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/jeneser/vue-scroll-behavior/blob/master/LICENSE)

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| IE9+, Edge| &check;| &check; | &check; | &check; | &check; | &check;


## Table of content

- [Demo](#demo)
- [Installation](#installation)
- [Description](#description)
- [Example](#example)
- [Options](#options)
- [ChangeLog](#ChangeLog)
- [Contribute](#Contribute)

## Demo
You can check vue-scroll-behavior demos at:

Douban: **https://jeneser.github.io/douban**

Simple: **https://jeneser.github.io/vue-scroll-behavior**

## Installation

#### NPM
```bash
npm install vue-scroll-behavior --save
```

```javascript
import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(vueScrollBehavior, { router: router })
```

#### Direct include

If you are using Vue globally, just include `vue-scroll-behavior.js` and it will automatically install it. Then, you need call `Vue.$vueScrollBehavior(router)` pass the router instance `router`.

```html
<script src="path/to/vue-scroll-behavior.js"></script>

<script>
  Vue.$vueScrollBehavior(router)
</script>
```

**CDN**

```html
<script src="https://unpkg.com/vue-scroll-behavior@0.2.0/dist/vue-scroll-behavior.js"></script>
```

## Description

When using client-side routing, we may want to scroll to top when navigating to a new route, or preserve the scrolling position of history entries just like real page reload does. vue-router allows you to achieve these and even better. But, vue-router scroll behavior feature only works in HTML5 history mode...

**`vue-scroll-behavior` allows you to customize the scrolling position on route navigation. Especially hash mode. You just need to tell it which routes need to be processed, and it will do that automatically**

**By default, It will scroll to the saved position. If you ignore some routes, they will directly scroll to the top**

**Of course, If you have some special scenes, we also provide some options, and you can manually use them to save or restore the scroll position**

**If you use transitions on all of your route changes, use the _delay_ option to delay the scroll until the appropriate point (e.g. the middle of the changeover).**
## Features

* **Simplicity** - only need to call `Vue.vueScrollBehavior(router)`
* **Compatibility** - Working in HTML5 history mode and hash mode
* **Automatically** - Automatically saves or restores the scroll position
* **Customizable** - Can manually save or restore the scroll position

## Example

When used with a module system, you can install it via `Vue.use()`, then pass some opts:

```javascript
import Vue from 'vue'
import router from './router'
import vueScrollBehavior from 'vue-scroll-behavior'

// Using vueScrollBehavior
Vue.use(vueScrollBehavior, {
  router: router,    // The router instance
  maxLength: 100,    // Saved history List max length
  ignore: [/\/boo/, /\/zoo/],    // ignore some routes, they will directly scroll to the top
  delay: 0          // Delay by a number of milliseconds
})
```

For additional examples and detailed description check the demo. **https://jeneser.github.io/douban**

You can clone this repository. Check the silmp demo.

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Options

List of available Options:

Prop           | Data Type  | Default   | Description
-------------- | ---------- | --------- | -----------
`router`       | Object     |           | The router instance: `const router = new VueRouter({})`
`ignore`       | Array      | `[ ]`     | **RegExp** list to ignore some routes, they will directly scroll to the top
`maxLength`    | Number     | `50`      | Saved history List max length
`delay`        | Number     | `0`       | Delay scroll by a number of milliseconds


## ChangeLog

This project uses semantic versioning. [Learn more](http://semver.org/)

- October 27, 2017:
  - Publish @0.2.0 Merged PR[#9](https://github.com/jeneser/vue-scroll-behavior/pull/9), Add delay
- June 24, 2017:
  - Publish @0.1.6 Fix issue[#2](https://github.com/jeneser/vue-scroll-behavior/issues/2)
- June 7, 2017:
  - Publish @0.1.5 Add some opts
- June 5, 2017:
  - Publish @0.1.3
  - Publish @0.1.4
- June 4, 2017:
  - Fix some bug, Perform browser testing
  - Publish @0.1.2

## Contribute

Please make sure to read the [Contributing Guide](https://github.com/jeneser/vue-scroll-behavior/blob/master/CONTRIBUTING.md) before making a pull request.

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build library and demo for production
npm run build
```

## License

[MIT](https://github.com/jeneser/douban/blob/master/LICENSE) Copyright (c) 2017 Jeneser
