"use strict";

webpackJsonp([4], { 3: function _(r, e, o) {
    r.exports = o("3WLI");
  }, "3WLI": function WLI(r, e) {
    "serviceWorker" in navigator && navigator.serviceWorker.register("worker-basic.min.js").catch(function (r) {
      console.error("Error registering service worker:", r);
    });
  } }, [3]);