/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e31774ce92cdc03819652e2fc8b5bb65"
  },
  {
    "url": "assets/css/1.styles.97e47d48.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.a9727e58.css",
    "revision": "15d82c8fc4be1616cc7f90e8bc8bd8ad"
  },
  {
    "url": "assets/css/3.styles.be7e113c.css",
    "revision": "256a6e8f2e2162beb87c4f6a40d4bcc8"
  },
  {
    "url": "assets/css/styles.b5ec3ec1.css",
    "revision": "83b6c76d9e23b35d7eb323d5fa0dfa2a"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.97e47d48.js",
    "revision": "8f4fef9500e1470e7165e7a36b39047e"
  },
  {
    "url": "assets/js/10.ae963730.js",
    "revision": "71ad85e2ad7715f6eb81b6deeeba67b9"
  },
  {
    "url": "assets/js/11.981601ae.js",
    "revision": "7dc300d1cb93c641272b988164add1df"
  },
  {
    "url": "assets/js/12.6cd19194.js",
    "revision": "09cb3d99abf4bf531c50f0d0ec5ad935"
  },
  {
    "url": "assets/js/13.8b378afb.js",
    "revision": "31d2a4bc3434a4353faa2a435d24991a"
  },
  {
    "url": "assets/js/14.89d31cc7.js",
    "revision": "fb682be2104797cd01464cb3e78aab62"
  },
  {
    "url": "assets/js/2.a9727e58.js",
    "revision": "30f4f06dd50e4b2a793fec9b4c58752d"
  },
  {
    "url": "assets/js/3.be7e113c.js",
    "revision": "7f560c68265cb71bcc587d21db3daa56"
  },
  {
    "url": "assets/js/4.750f8ada.js",
    "revision": "fa4f7e01265e35210ace16dcaf1708c9"
  },
  {
    "url": "assets/js/5.cf0f67d1.js",
    "revision": "9d98de34e83bc4067f778a064cc6abfd"
  },
  {
    "url": "assets/js/6.8bb85803.js",
    "revision": "84c36a415f1bb2fed32685c6677de8a1"
  },
  {
    "url": "assets/js/7.7ac090d5.js",
    "revision": "5bd8665230e5ef546f80d9160fcae4b4"
  },
  {
    "url": "assets/js/8.418dfb0b.js",
    "revision": "4d1c8a3dd8a6118aaf5622f0f18abca3"
  },
  {
    "url": "assets/js/9.5b809a10.js",
    "revision": "6ebf34fdbca2e35ea729160ef22ce1b1"
  },
  {
    "url": "assets/js/app.b5ec3ec1.js",
    "revision": "ee66bcad8e833d96afc6ff63ad4130cf"
  },
  {
    "url": "flower.png",
    "revision": "e8a3663b2428cca65d14cc4373ff1e8c"
  },
  {
    "url": "icons/flower_icon.png",
    "revision": "714cf8f9c2646907bb218fa35e37c62c"
  },
  {
    "url": "index.html",
    "revision": "48a18fb939f8166f1cb53b102d0f8d53"
  },
  {
    "url": "logo.png",
    "revision": "82b9c7a5a3f405032b1db71a25f67021"
  },
  {
    "url": "PERSONAL/index.html",
    "revision": "5cf63ac9988791f188285b3bc4455be7"
  },
  {
    "url": "PERSONAL/个人简介.html",
    "revision": "112aee1567e973ad8e2609c7a85a0866"
  },
  {
    "url": "PERSONAL/开源项目一.html",
    "revision": "e8ca4259b77b97df6c2bcc66a9ef1a3e"
  },
  {
    "url": "SOURCE/index.html",
    "revision": "3815cddc6b00189de0b5cc73e4c23d12"
  },
  {
    "url": "SOURCE/javascript之for循环的几种写法.html",
    "revision": "05759fea0981a6f7a43bed0c4d4e513e"
  },
  {
    "url": "SOURCE/test.html",
    "revision": "13a5d78ff83df0c1cc506979f0bf68a5"
  },
  {
    "url": "WEB/CSS/javascript之for循环的几种写法.html",
    "revision": "a9be1fc0570644a3438d51fcd7a4141d"
  },
  {
    "url": "WEB/index.html",
    "revision": "4bcbb0d8a2599a758f4b0433352807b5"
  },
  {
    "url": "WEB/JS/javascript之for循环的几种写法.html",
    "revision": "9cc595f063c4259aa3f841875f733ecb"
  },
  {
    "url": "WEB/JS/test.html",
    "revision": "63f35bcfd4ba26c9b50c7356e46042b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
