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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7fe16a61e016e490695a.js"
  },
  {
    "url": "app-bcb3896c41722c7d3899.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-554b9a695eb29cca4f78.js"
  },
  {
    "url": "index.html",
    "revision": "e82e5a56fc4eaf6bcb7abece350fe862"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "33626a4900dd1a2e4b0967fd54a11597"
  },
  {
    "url": "3.5b45ca12df3e7aa2ab91.css"
  },
  {
    "url": "1.ec4af2b85f6e8b7b01e2.css"
  },
  {
    "url": "0.3a3ba0677171daf4818c.css"
  },
  {
    "url": "component---src-pages-index-jsx-ca811d37e8c652f4f42a.js"
  },
  {
    "url": "2-f1ac7eed66141fc92f3f.js"
  },
  {
    "url": "0-f538097f4393b4f08fb4.js"
  },
  {
    "url": "3-b41f25f71cd7ec4ffbfb.js"
  },
  {
    "url": "1-b8125e0e7ed92a698369.js"
  },
  {
    "url": "static/d/330/path---index-6a9-LTboCqQsPlfrWi7eZ5fYPneBYE4.json",
    "revision": "f3188cd5d502625cb2d74583a1218b2f"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2c6844454393bec03b0b093e2f52ae60"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/gatsby-material-starter/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});