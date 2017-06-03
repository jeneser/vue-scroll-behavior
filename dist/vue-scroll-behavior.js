/**
 * vue-scroll-behavior v0.1.0
 * (c) 2017 jeneser <jeneserwang@gmail.com>
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.vueScrollBehavior=t()}(this,function(){"use strict";function e(){return document.getElementsByTagName("body")[0].scrollTop}function t(e){document.getElementsByTagName("body")[0].scrollTop=e}var o={};return o.install=function(o,n){o.historyList=[],o.vueScrollBehavior=function(o){var n=this;void 0!==o?(o.beforeEach(function(t,o,i){var r=e(),u=n.historyList.findIndex(function(e){return e.path===o.fullPath});-1!==u?n.historyList[u].position=r:n.historyList.push({path:o.fullPath,position:r}),i()}),o.afterEach(function(e){t((n.historyList.find(function(t){return t.path===e.fullPath})||0).position)})):console.warn("vue-scroll-behavior dependent on vue-router! Please Create the router instance.")}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),o});
