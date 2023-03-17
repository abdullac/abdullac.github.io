'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/netflipztabtopsearches.webp": "ae3cee59666cda14152cd42133a68314",
"assets/assets/pubspec.png": "a5653045532c487c269520175fef25e1",
"assets/assets/json.png": "c4f6977bc425918a0e9e08521d899077",
"assets/assets/share.png": "5ddd2339af9a07e55698f608d69bdca6",
"assets/assets/netflipztabfastluaghs.webp": "f93bfed5874cd1c4266b686beea0f7fd",
"assets/assets/netFlipzLogoA.webp": "60a3892b90405e234101bae346ee36bf",
"assets/assets/fluttera.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/netflipzmobilehome.webp": "e8d44b83dd14e7b55c9e58cd1b2732b5",
"assets/assets/netflipzsearchresults.webp": "d9b492c5809dfe3c93032826ad7ce44c",
"assets/assets/injectable.png": "1950a5804f47672c6c2bb9a171ee4510",
"assets/assets/netflipzeveryoneswathing.webp": "45d93a75e1fdacf9d0a1bbd2113c580c",
"assets/assets/netflipzmobiledownloads.webp": "b74c6a73f5e7e34b4127f19fa6afe144",
"assets/assets/myPhotoBigFace.webp": "c31a81393b71e69203f5c356babe31e3",
"assets/assets/netflipzcomingsoon.webp": "9125d18fa1594ae670a097d08530891c",
"assets/assets/netflipztopsearches.webp": "eff7cfeb9a53d9ed7e562e749131ea02",
"assets/assets/bottomnavigationbar1.webp": "85e840d68022f22bd980fc425084e791",
"assets/assets/freezed.png": "9dae1dfe6f3d048dab2a14e4b19f17bd",
"assets/assets/Myphoto17pngi.png": "67f47fe469e00b7963f0591b307e4051",
"assets/assets/appbar1.webp": "c06cbb65baf6763ce49c2d15b0dcd03a",
"assets/assets/netflipsdownloads.webp": "c44baa44994d3606aa9802c548b4acb9",
"assets/assets/Netflipz.png": "419ab4499ee6aca7fa410eb34519b3a8",
"assets/assets/netflipzmobilesearchresults.webp": "fef57d02c3b71020d4941de6ebfad568",
"assets/assets/flutter.svg": "755da6a51e46d7cc2d287545d52eed01",
"assets/assets/abdulla_photoi.png": "64a1e32f85ec214fd439b3125a25542e",
"assets/assets/video.png": "5660eb19450146c0d9649b0fbc74d087",
"assets/assets/zpoutnr.png": "257544f8147ba12cc0ef60cdf16b647f",
"assets/assets/NetClipxLogo.png": "fe1908963f8eeea6b74f2596b03ed657",
"assets/assets/dio.png": "5b9e0f91814e3211b32e8787d74e65c8",
"assets/assets/abdulla_photo18i.png": "25f437f11e662645fed09357a724a5ab",
"assets/assets/myPhotoFace.webp": "1edcffed7d20f92cba624571b3e97ba0",
"assets/assets/myPhotoBigFace.png": "4f265baca9567670a9b501b8c5ea35fb",
"assets/assets/searchfield.webp": "8470b3b2bb4d6403a3c939534eaa1300",
"assets/assets/netflipzmobileeveryoneswatching.webp": "fe7c215501dc3f37b1b720a4f5e1384f",
"assets/assets/emoji.png": "b7ab3fe42e498cb9d4a44fea7e8a0340",
"assets/assets/headlinebackground.png": "0969e1d85920b5e456d986a029918100",
"assets/assets/myPhotoBigFace.xcf": "42be67891e6e57b988672f002d67f34a",
"assets/assets/NetClipxTextImage.png": "f86038ae80b6095697f8937110247c6d",
"assets/assets/netflipztabsearchresults.webp": "e1952acb3d2b8f4be070218530a57cc6",
"assets/assets/netflipzmobiletopsearches.webp": "26ad27996edd8e18fb0efad5d9d9fd14",
"assets/assets/netflipztabdownloads.webp": "99ca8fb9560ae437e1161b9e8acd4afa",
"assets/assets/netflipztabcomingsoon.webp": "e39c2ccab6a57c3fd800fff1968cbde3",
"assets/assets/netflipztabhome.webp": "46df95bc8893f583a858ebf01bad2a53",
"assets/assets/imagecards.webp": "df29147bd74a43e4a2d65fc8ab5f422f",
"assets/assets/netflipzhome.webp": "e53e986cee10ed95c69ba1e7d5cb52cb",
"assets/assets/personShapeText.png": "56f074b5aa023ca6ddfeaa0ebd6d3739",
"assets/assets/netflipzmobilefastluaghs.webp": "5bd8a9bd2637c361e67ecf4a857b955e",
"assets/assets/netflipzfastluaghs.webp": "a32b362db4f0dab3f4554c28f661e7f7",
"assets/assets/abdulla_photo35i.png": "19d879fb811ba96272d4b855a2ccaaa5",
"assets/assets/netflipztabeveryoneswatching.webp": "98b0cf21efefc7d43146c4a6ff6ef126",
"assets/assets/MyphotoBig.webp": "b3f7aea42675c32593f0720edcc7376e",
"assets/assets/netflipzmobilecomingsoon.webp": "118cb55b118a15203d4420fea5542582",
"assets/AssetManifest.json": "b2b50e96ae3002f96142dfd35f215b15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "20227c7ddcbe33bc9fe8c66d891da096",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"version.json": "21aafecb24aa1abb1a170a467969ad49",
"main.dart.js": "59396b4503fd7b17dfcada091ffe6fe0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2bbe162a439c67954dcc024cff014fcd",
"/": "2bbe162a439c67954dcc024cff014fcd",
"manifest.json": "50f756362dff6d12a320690e56564b2f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
