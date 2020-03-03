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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "83b2230b3081fc7f22eaae703e8503c3"
  },
  {
    "url": "assets/css/0.styles.8c46daec.css",
    "revision": "1a839e94f78484750db3b5faadb3e2ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7840874b.js",
    "revision": "25985270293dd57e5e560c7544461bf2"
  },
  {
    "url": "assets/js/100.5dda97ef.js",
    "revision": "90b4657813fff4502db2bbb75c197858"
  },
  {
    "url": "assets/js/101.dbbe1f43.js",
    "revision": "31f885cde21dd72184977a1d3a47d613"
  },
  {
    "url": "assets/js/102.76c88522.js",
    "revision": "f0cf5ce6e6c46ebb9582bc1b4d57ed4e"
  },
  {
    "url": "assets/js/103.bd47218c.js",
    "revision": "16b5122608f3d568d3cb06106048ba18"
  },
  {
    "url": "assets/js/104.64230d4e.js",
    "revision": "a189238d4ffcd3b35ccd078e4c11fc9d"
  },
  {
    "url": "assets/js/105.656b87f8.js",
    "revision": "0cbf124147f7c10ce347705b54135b5a"
  },
  {
    "url": "assets/js/106.82033d42.js",
    "revision": "280ad1a78f88239d09cca1cd9fff671c"
  },
  {
    "url": "assets/js/107.cd00b024.js",
    "revision": "0a4dd28aded467d0e0166de3d075ad11"
  },
  {
    "url": "assets/js/108.ceab506e.js",
    "revision": "666cb07d6b10407648cb4b481a7a6480"
  },
  {
    "url": "assets/js/109.62104b81.js",
    "revision": "22e1af79635872a3b9ff977d33ddf1ef"
  },
  {
    "url": "assets/js/11.ac257d6e.js",
    "revision": "4f45513070d7efdea4f8848dda22d0e9"
  },
  {
    "url": "assets/js/110.e42f1be9.js",
    "revision": "9c37183251c8e91d1e23f7ee07e0e9a0"
  },
  {
    "url": "assets/js/111.6b99da0d.js",
    "revision": "2ece5b81ee30b6c2455957c25e284fdd"
  },
  {
    "url": "assets/js/112.0737b48f.js",
    "revision": "5e605aeaa0e4defe71aa4143e00e8c74"
  },
  {
    "url": "assets/js/113.2dfcb751.js",
    "revision": "556ae9486a0b305e1e3eedd906b2526a"
  },
  {
    "url": "assets/js/114.e4ae07c7.js",
    "revision": "ca172e050485f4a43090a72cbfcdf9fc"
  },
  {
    "url": "assets/js/115.53dc364b.js",
    "revision": "234ddec1acbbe944a04944411598547c"
  },
  {
    "url": "assets/js/116.cf5727ca.js",
    "revision": "626177f71f8d57d0f4c97347093047a4"
  },
  {
    "url": "assets/js/117.bb97d513.js",
    "revision": "e9d22136790b50831dee8cd1e15c9f9a"
  },
  {
    "url": "assets/js/118.07782ac7.js",
    "revision": "e712d31bfcd86b61d42a288535898139"
  },
  {
    "url": "assets/js/119.3f84b156.js",
    "revision": "b21dae24ec28d4af34a8ce02f7deaed8"
  },
  {
    "url": "assets/js/12.a6e07cb1.js",
    "revision": "4757000bf80676ece6be7e115418b888"
  },
  {
    "url": "assets/js/120.8a74fdb2.js",
    "revision": "08892a8b75fd44b50e0635bf809abec7"
  },
  {
    "url": "assets/js/121.6106fdbb.js",
    "revision": "27422e58e10cc594fc03816790664fea"
  },
  {
    "url": "assets/js/122.0f83d3e7.js",
    "revision": "738ec379a86469e93eced166cc0c3875"
  },
  {
    "url": "assets/js/123.7ab379cc.js",
    "revision": "e1ed85f7d37c1653e1a563e4c54d805d"
  },
  {
    "url": "assets/js/124.837b645f.js",
    "revision": "c301591d3b446439e75ba4195c8fbf17"
  },
  {
    "url": "assets/js/125.231759ac.js",
    "revision": "ce6e6554c0ef382c621a604d04b9bad3"
  },
  {
    "url": "assets/js/126.2ff2e107.js",
    "revision": "700ec5bf9275d643866538bfc8152c86"
  },
  {
    "url": "assets/js/127.d4904459.js",
    "revision": "e4ff96d9f561650d2905ee13ab6d7902"
  },
  {
    "url": "assets/js/128.3462c6f7.js",
    "revision": "444c85a81daad5fad8ea1a8de3df54de"
  },
  {
    "url": "assets/js/129.847591e6.js",
    "revision": "bd42e02cb4f27585549cf5615e2ab3db"
  },
  {
    "url": "assets/js/13.a8c6b11b.js",
    "revision": "5fb5f113d3d695eb2fd5d7d4629bb40a"
  },
  {
    "url": "assets/js/130.74689f33.js",
    "revision": "0e576777051c9a532b7c3876e04b99c9"
  },
  {
    "url": "assets/js/131.7deb2d07.js",
    "revision": "252a23dfee37e98e9ac8886a7fcc6454"
  },
  {
    "url": "assets/js/132.47c4545e.js",
    "revision": "6c0c66d1d3d2ce7a301ca138c92bbb9e"
  },
  {
    "url": "assets/js/133.1c4e07be.js",
    "revision": "08bdc094b46073a32f0ff2566956cd04"
  },
  {
    "url": "assets/js/134.dcc0030c.js",
    "revision": "86cc696962616c167a0c7a841fa75ddb"
  },
  {
    "url": "assets/js/135.521389b9.js",
    "revision": "b32eb3fa51b65de95e7874d8831042b2"
  },
  {
    "url": "assets/js/136.e403e841.js",
    "revision": "692f71de00933c62549cf2e6f33984f0"
  },
  {
    "url": "assets/js/137.721a9a1e.js",
    "revision": "07bb8e89b4a41ab675d75e928c37d1db"
  },
  {
    "url": "assets/js/138.e41edead.js",
    "revision": "aa62cf723961de9a246e543033ed8bd1"
  },
  {
    "url": "assets/js/139.5d1746c5.js",
    "revision": "ba5c4bab9ea1e439e289ddec6ea2b1f0"
  },
  {
    "url": "assets/js/14.41e5956a.js",
    "revision": "92dea6267f367199c2fc8349113710d0"
  },
  {
    "url": "assets/js/140.8742e3eb.js",
    "revision": "6d2d0921cbd92e460a8391387c546f2a"
  },
  {
    "url": "assets/js/141.5661ec9a.js",
    "revision": "704d965c99d3f639ceaa5018eb5a5939"
  },
  {
    "url": "assets/js/142.44871095.js",
    "revision": "70cafc00d431a19de99a3589812be147"
  },
  {
    "url": "assets/js/143.3ea75964.js",
    "revision": "77d30450e0924639b577caae4c73f6b6"
  },
  {
    "url": "assets/js/144.96969688.js",
    "revision": "025c54a910798e5dd7b615ba5ecbf57f"
  },
  {
    "url": "assets/js/145.0d23ebd5.js",
    "revision": "015e05e1cf69218be17c7db96f80cc8f"
  },
  {
    "url": "assets/js/146.a0ddc91e.js",
    "revision": "2263cc170dabf4851a53febea892a195"
  },
  {
    "url": "assets/js/147.60f1e4dd.js",
    "revision": "0b7a1beb40a99adea7dacc70d73b0119"
  },
  {
    "url": "assets/js/148.15dd1885.js",
    "revision": "b72bbed27bb73e82560e451b000d39d6"
  },
  {
    "url": "assets/js/149.38af1de0.js",
    "revision": "eed42dc99234ba17abb1d1808f6a6761"
  },
  {
    "url": "assets/js/15.97bf8820.js",
    "revision": "69c1ffec324a173cbb2d487b7ea3d11b"
  },
  {
    "url": "assets/js/150.80fe0c27.js",
    "revision": "bee7312a833575580692a844b40a9bf0"
  },
  {
    "url": "assets/js/151.7d84e079.js",
    "revision": "c463561c77615a5f32778e348d1b7360"
  },
  {
    "url": "assets/js/152.7e2eba95.js",
    "revision": "7c34e8dda8bf710943e104641e5c94c8"
  },
  {
    "url": "assets/js/153.b98584ac.js",
    "revision": "abb2a14e659e6b8817d17eaccef420d0"
  },
  {
    "url": "assets/js/154.ba751953.js",
    "revision": "1ea7e45edc8d053742d15101553c21b5"
  },
  {
    "url": "assets/js/155.e56b983e.js",
    "revision": "2b3dc7f70eaeb8f35440f557bc71eadf"
  },
  {
    "url": "assets/js/156.3bd14e7b.js",
    "revision": "94c2e7b427602a488371aab77c60e465"
  },
  {
    "url": "assets/js/157.93bd8a8e.js",
    "revision": "3ff9520058f100c6e4f18dd8ae34ab8c"
  },
  {
    "url": "assets/js/158.0221fda8.js",
    "revision": "188260fd92883ec47b7bbf730bffc539"
  },
  {
    "url": "assets/js/159.9d421dc2.js",
    "revision": "3b9d2230f5126f2d5e9b0e9ffdbd6cb4"
  },
  {
    "url": "assets/js/16.e2f49d7e.js",
    "revision": "53e6d511f47abe6c0d2a6b1e4a52de3a"
  },
  {
    "url": "assets/js/160.b880ba2c.js",
    "revision": "9de915f2882d3dfee41b2945cbf27825"
  },
  {
    "url": "assets/js/161.8368b364.js",
    "revision": "70bf4abf71d1a702bc2ff0bf7d4f4dfd"
  },
  {
    "url": "assets/js/162.82c770f2.js",
    "revision": "d8f29ad2777abb80e7586b46cfe87986"
  },
  {
    "url": "assets/js/163.c87c5933.js",
    "revision": "72f51242ffe180146608c30dee383cc4"
  },
  {
    "url": "assets/js/164.76aa812b.js",
    "revision": "c8d09513de0345cbfec4163ab90c3535"
  },
  {
    "url": "assets/js/165.e70bb994.js",
    "revision": "2475e5d4de466012ac34a45dd376c8ed"
  },
  {
    "url": "assets/js/166.27f0d74b.js",
    "revision": "f46d8b54d3c69a7e554dd32c04de261a"
  },
  {
    "url": "assets/js/167.ef177c5c.js",
    "revision": "efb449e293d7b7ccf490880496ea6b22"
  },
  {
    "url": "assets/js/168.fd5596bd.js",
    "revision": "af375d2575993d66ffa5a90c531e5665"
  },
  {
    "url": "assets/js/169.6dc9cb1c.js",
    "revision": "3c0192622347307ee3c0e2819d51e622"
  },
  {
    "url": "assets/js/17.8cc762de.js",
    "revision": "190d2f0f32619498f3c2c0c054d281a3"
  },
  {
    "url": "assets/js/170.757bae1e.js",
    "revision": "6e79a4ff4bc675c834ae081ccee794d6"
  },
  {
    "url": "assets/js/171.3af36841.js",
    "revision": "4fd881c9616cb519f79ced548b3f6f14"
  },
  {
    "url": "assets/js/172.d65587f3.js",
    "revision": "c42071cbaa1a467605352c695470fe94"
  },
  {
    "url": "assets/js/18.c1430b8a.js",
    "revision": "35543e03c4019809346c62ca6c51c7df"
  },
  {
    "url": "assets/js/19.43a703c5.js",
    "revision": "5550640137fd8cfb655aca86c261417e"
  },
  {
    "url": "assets/js/2.e1e0c7d5.js",
    "revision": "0a0821711c19c3f33297f843b7d3a5a4"
  },
  {
    "url": "assets/js/20.2e14abfa.js",
    "revision": "bbb45b13dac29effc2aa45eb2ed5a874"
  },
  {
    "url": "assets/js/21.8d68d911.js",
    "revision": "3a00dd5a2126aaecee35218a67a4b28d"
  },
  {
    "url": "assets/js/22.e05a1394.js",
    "revision": "2617e1c06c3b061420b107fb0371615a"
  },
  {
    "url": "assets/js/23.68e82a67.js",
    "revision": "6eaebac377f6b95cd754208d4d3b55a8"
  },
  {
    "url": "assets/js/24.41d656e2.js",
    "revision": "02f4a8da9bf7d7b6c7287396c006a0ee"
  },
  {
    "url": "assets/js/25.315f9fc2.js",
    "revision": "cd9c2d27f95e3b410bc6efe0ed20aec6"
  },
  {
    "url": "assets/js/26.4da73a77.js",
    "revision": "67f6d7c6adbadb16ec9a4570d0652451"
  },
  {
    "url": "assets/js/27.56211c61.js",
    "revision": "de937b63a552042542b2ee317fe480a0"
  },
  {
    "url": "assets/js/28.d357956f.js",
    "revision": "95580143be7046cff82f97eced1eda83"
  },
  {
    "url": "assets/js/29.d542a18d.js",
    "revision": "41d0858a525d16e72819892630650936"
  },
  {
    "url": "assets/js/3.facfa05b.js",
    "revision": "7f178ff83c54387e92a4b150217366e9"
  },
  {
    "url": "assets/js/30.5913ee80.js",
    "revision": "3af5d8ba12421c584ffb86a97ce4778e"
  },
  {
    "url": "assets/js/31.96c515bc.js",
    "revision": "ca296dac712a3ebf8d24ec0ead8bd90a"
  },
  {
    "url": "assets/js/32.832d2769.js",
    "revision": "fd8e5bd59a5e1511ca8ec4772423872f"
  },
  {
    "url": "assets/js/33.0b5f2b6c.js",
    "revision": "0b29f0701883789ce91766f72dfe8cbc"
  },
  {
    "url": "assets/js/34.f0a43b54.js",
    "revision": "10a764da0fe5b7a81eb85f217dc174c6"
  },
  {
    "url": "assets/js/35.393f5115.js",
    "revision": "38fd1f0d8a27ab9fa2ff4a39683fbaea"
  },
  {
    "url": "assets/js/36.6931f3d3.js",
    "revision": "58991f60ee4a5e7a152ad0ce2b074bbb"
  },
  {
    "url": "assets/js/37.3af59799.js",
    "revision": "8a180a8f07356f406026ef25f4c29be1"
  },
  {
    "url": "assets/js/38.187b03ec.js",
    "revision": "feed8f48896839fb93baaac1f678936a"
  },
  {
    "url": "assets/js/39.ef86e799.js",
    "revision": "40e56a33d86d7469262be478808c31e5"
  },
  {
    "url": "assets/js/4.2c2796bf.js",
    "revision": "a36fefe026dc7f65d42b067760d00e79"
  },
  {
    "url": "assets/js/40.3d79bb9a.js",
    "revision": "aca50d7c5343d0cfe311a25485fd0fb0"
  },
  {
    "url": "assets/js/41.6a2b99f8.js",
    "revision": "4c8b96a72b47c7875e30c30e8d008bf1"
  },
  {
    "url": "assets/js/42.687b56eb.js",
    "revision": "5bdb68e3d9c2043ee4b363317ea58760"
  },
  {
    "url": "assets/js/43.05284af3.js",
    "revision": "1547a125fcf55449f69463e039c2c304"
  },
  {
    "url": "assets/js/44.0b67307e.js",
    "revision": "c33a2664765ccfb743494c030a6dcff0"
  },
  {
    "url": "assets/js/45.7f6ef1f3.js",
    "revision": "74659d864543ea0ab8e0b70527a86fb1"
  },
  {
    "url": "assets/js/46.8249bf7e.js",
    "revision": "f1a51a0f0b35f279d8e21bae5cb3c3bf"
  },
  {
    "url": "assets/js/47.ec5f420e.js",
    "revision": "216c53e070e0b2853d7905c640dfc6ed"
  },
  {
    "url": "assets/js/48.d11a6c13.js",
    "revision": "438edf646305bb7680b3b2b1a8ba6df3"
  },
  {
    "url": "assets/js/49.e6449fe8.js",
    "revision": "5c163733e1a3f5a58c69e4e09e299ad0"
  },
  {
    "url": "assets/js/5.937ae87d.js",
    "revision": "2574ebcd0756ead4d864a97a7ead7328"
  },
  {
    "url": "assets/js/50.915ae3af.js",
    "revision": "3c7fab90f3eecae33f051a5be3d3c0f6"
  },
  {
    "url": "assets/js/51.a31ec1be.js",
    "revision": "e7462741ed5247369310471814abf221"
  },
  {
    "url": "assets/js/52.19883d30.js",
    "revision": "dc158f2c9d3ba961da54e3f57166e527"
  },
  {
    "url": "assets/js/53.fae82d2a.js",
    "revision": "74e644ba44a7eed03d1474341d27ca0c"
  },
  {
    "url": "assets/js/54.45609db2.js",
    "revision": "ceab0df9ef2bb237ff847c4adc1a3db3"
  },
  {
    "url": "assets/js/55.33a03ab4.js",
    "revision": "4a7318452ebdaff6fa6a65d3c7362738"
  },
  {
    "url": "assets/js/56.0d38c66e.js",
    "revision": "bfc9a6502c3d9a0f17c9e891d4f2c3e6"
  },
  {
    "url": "assets/js/57.1ba23ed4.js",
    "revision": "80fb07130c5cd8f0baccc951ede1f864"
  },
  {
    "url": "assets/js/58.188a7c01.js",
    "revision": "5a7d3cc775a11ee5ec56853d4b08888a"
  },
  {
    "url": "assets/js/59.ee218327.js",
    "revision": "179a99d67a22adc95de7934e8332be1a"
  },
  {
    "url": "assets/js/6.c085291d.js",
    "revision": "8fd2f43355787c4cc592097ce6a361a7"
  },
  {
    "url": "assets/js/60.2bcf90df.js",
    "revision": "377f1f41563f7cc7a0eef232ad035f74"
  },
  {
    "url": "assets/js/61.9de5ce4c.js",
    "revision": "98d0ff867ccc8cfbbc18885c6304a4b2"
  },
  {
    "url": "assets/js/62.6f5dbe75.js",
    "revision": "18da2e07f4776b0645a9511600b950e6"
  },
  {
    "url": "assets/js/63.4e662f41.js",
    "revision": "6037182c890586ca2f86329ad7657bba"
  },
  {
    "url": "assets/js/64.804aae24.js",
    "revision": "6b3b14f93bd7e0ed83ad354dc5b8b254"
  },
  {
    "url": "assets/js/65.0df2e097.js",
    "revision": "8c689e05a6089d501e1b95faf691661b"
  },
  {
    "url": "assets/js/66.194207b7.js",
    "revision": "c34520e6fde0aac563dd62d39b5ac123"
  },
  {
    "url": "assets/js/67.5eeacbe7.js",
    "revision": "e2c7d38d79076b3269f792a459264384"
  },
  {
    "url": "assets/js/68.3da4dbea.js",
    "revision": "6ff4d4832f3e8bb4048ce9d7ba5eeb7d"
  },
  {
    "url": "assets/js/69.0197aa54.js",
    "revision": "9fc4a3e5aa0ff5b07db01d7fe7505d3a"
  },
  {
    "url": "assets/js/7.33994ffb.js",
    "revision": "376b10dadbbe368ef8bc8be12cb9c49e"
  },
  {
    "url": "assets/js/70.b44bcde5.js",
    "revision": "ea91202717eb82c923f1ba9b82f18a19"
  },
  {
    "url": "assets/js/71.ae852805.js",
    "revision": "7dabd4647a7206babf8e2775ceff02db"
  },
  {
    "url": "assets/js/72.22ca912d.js",
    "revision": "96a9b48077a5683794ff77602f0c1f3e"
  },
  {
    "url": "assets/js/73.525ae5c5.js",
    "revision": "1055d0b644fe680c016a92a7cc5a3d8c"
  },
  {
    "url": "assets/js/74.2bda5e20.js",
    "revision": "525bdc886f8a06109def221e01ae11e6"
  },
  {
    "url": "assets/js/75.4d9aef06.js",
    "revision": "8506b69f1c5f628843416613ace3193e"
  },
  {
    "url": "assets/js/76.00a4ea0a.js",
    "revision": "330c5d0ce286096a0426d32427937d0f"
  },
  {
    "url": "assets/js/77.5b1b27a3.js",
    "revision": "03ab5221f62fbd2f7996161804b2b983"
  },
  {
    "url": "assets/js/78.535ab128.js",
    "revision": "bf159cd4fd75b54eda9467e127a72422"
  },
  {
    "url": "assets/js/79.052132cc.js",
    "revision": "d51dbb4b77e8e5a8647e3b589df2c683"
  },
  {
    "url": "assets/js/8.94fe2fce.js",
    "revision": "9e7ac09b938f3f2d8ca4d9cfba993fd5"
  },
  {
    "url": "assets/js/80.e020d0e4.js",
    "revision": "1636db6dc64055a8b076864771e91ffc"
  },
  {
    "url": "assets/js/81.cc73a348.js",
    "revision": "590d72a55ec4ce9eada2e62920a81a6e"
  },
  {
    "url": "assets/js/82.6ecb0a91.js",
    "revision": "64e41b1b85b53bb3a0b1961c1faaaa11"
  },
  {
    "url": "assets/js/83.b9667f0f.js",
    "revision": "185c615f803de2204e6755edfffa5944"
  },
  {
    "url": "assets/js/84.a5bfc378.js",
    "revision": "7443f347ff19bbd18347571812c10605"
  },
  {
    "url": "assets/js/85.d0003473.js",
    "revision": "b4588a5c366aa66fb5539a636afb7749"
  },
  {
    "url": "assets/js/86.1738947d.js",
    "revision": "1671ae37e1f867537366167ee6a68ec8"
  },
  {
    "url": "assets/js/87.1f1a5533.js",
    "revision": "4a1d2bdbff7b3a66a1ab362a284a9493"
  },
  {
    "url": "assets/js/88.e4705f1c.js",
    "revision": "0ea19cb67111456f0833d1a94bdedeb5"
  },
  {
    "url": "assets/js/89.123698b2.js",
    "revision": "aaeeadccabffdb705282beb4a7e6af5d"
  },
  {
    "url": "assets/js/9.34339a8e.js",
    "revision": "3fa549d8ef9a3d70037344584b5e5da0"
  },
  {
    "url": "assets/js/90.5a861094.js",
    "revision": "3aef7b5e2a9fb54e91784f6f45c73023"
  },
  {
    "url": "assets/js/91.ee74dcce.js",
    "revision": "64925b8d24d2ceafa65edcd663f5facb"
  },
  {
    "url": "assets/js/92.03377a3a.js",
    "revision": "e7f910ba933d593331668e2a4ad0101f"
  },
  {
    "url": "assets/js/93.7cda88cc.js",
    "revision": "041cda8ba425197e7572327647275bdf"
  },
  {
    "url": "assets/js/94.683ee3d7.js",
    "revision": "0d2482c734a24683b2217d923336a6d9"
  },
  {
    "url": "assets/js/95.2d2088a6.js",
    "revision": "0e75ccfb263c089ce98fb71304a89e53"
  },
  {
    "url": "assets/js/96.de790b27.js",
    "revision": "a8214dff95c5e5bd63c9be9bd79c2771"
  },
  {
    "url": "assets/js/97.a72d4d81.js",
    "revision": "ca1a9cc0ad263158785a519e5ec1d0be"
  },
  {
    "url": "assets/js/98.8c152a9c.js",
    "revision": "76b25cd72078439c063417d10ffa57da"
  },
  {
    "url": "assets/js/99.5fd30a43.js",
    "revision": "dcfb648b50865a012c9d53d28189b917"
  },
  {
    "url": "assets/js/app.559fa2b2.js",
    "revision": "7aba6e497103db8c96ca7058cd9d2a48"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "9550d13546161084dd0fcbf9c92b19b3"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "a4cb970f2d62d1080df9c198f93e6f6d"
  },
  {
    "url": "guide/index.html",
    "revision": "a3aa4a9ffc9e292fbb76be66b86f7b54"
  },
  {
    "url": "index.html",
    "revision": "bea756cca88b03ed8b0019051a3722c7"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "911c0de65ff4eb14d7bdd01f5bb13ae9"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "a64ce9a5591072a56e9602a01c5b3b57"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "61100398f5c3ec15262370b1cc16e90d"
  },
  {
    "url": "notes/待整理.html",
    "revision": "04d508c6452a37836ccab7b2b923834e"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "d4285cdd9d009675263755f2be7c4b20"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "a63b64a155b255abff822dcc46e0914f"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "86ce524b2abb57df199d60d7ac16830c"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "f2c3f98a4abc139adfc2d9416187c1a0"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "b5a161ce49d027192204a3a7723ae7d6"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "84c2b129fa284d9bb4894484d37fe494"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "ac7ec4e5bed977158eb0c39ab2fbb444"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "78728e3e8222a65e3c9b8a981f67102c"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "1587863898e4082f23fddd27363225e9"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "781eca7857eef5ba26ebc946dc5d4736"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "4d7922a62789348778679d053299fa59"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "d9da11006f938fa458c0978d02c1ca83"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "5c3cd5101eb962aea92dd69dea24e2c3"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "7fd5df9cf76529c120e457a36a2c8fc6"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "e4e06809c3aa4018e7126e94f5eb61b1"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "98b8f31faf8d87e2b2257a011bb53a9b"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "6a659b139a3c033b06d5572173671e9a"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "76ab0ed1c71608c9cd349e1beb4469ef"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "ff6f6977940f3220e12238e94e471fa5"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "014e6d4294cf1aa4ea8fcf54d41198ac"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "08850d58f147820ec7944c9cbd2081d9"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "36c2f61d8c629a2166eb01c9900ff33f"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "a8dbe7b643f780cb1a351e8506dfa6d2"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "13f156b3781651deb94a4104b17312ca"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "3aea408daa3eb131d565955ff703bc27"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "44e6b418f859455c9ebeb3a8a7b4919b"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "b81adb96ed8dc2f42f3c20e164e5eac5"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "a60580e17f817ae50a7be7ef3165f44a"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "3f3e6fd197839637812ad76e9a77f751"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "1b4c921cfd9349a4c39e3e9c2652f2a8"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "d936c23a7eb6e758e1c1c9de2de77a4b"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "66f8bdc428694099819dd07e3cd1c1e5"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "79e0fef1e1a60f0636f1ca6b871f1a55"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "b1e9517eecaf002907d6c1fb7b9528b2"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "0957ee214819abae983b8ffc66d56ac9"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "3bfe298d280ca2ae5e86a47c5c6c48c7"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "ccc9de0b8bc28af655d80088a5f75c4a"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "031d1e2c7f0f72fefc86333371e5926a"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "a70d777343d804964734ef50a5d2414c"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "47bc88fe75a0f1923e2accfb54f15a7f"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "8d5635cfedd5f51ab5bc1c90311e6289"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "b5a18c76e33a9989117b142ffbb25439"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "8729301e25e34c9c70c86d1f5a21bbeb"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "a26026cb737182d35f9668bd4a928ed5"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "6e99d1b7054f34994cdec2bf3012e9a6"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "037517cdf670670bf4aaf247751da0c3"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "9eb6d25bff8d0ba258edd52a9988a4ae"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "9224888d56f5da8a0b1099022558d1e2"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "6516e7053f695a781548fe76108e7dc3"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "53ce811233c4f75b7cf8e5b5a5962a52"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "75bc09837d63bd1baec4eebda4046634"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "7550938c200ec62019717cc6d7f5d857"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "19c2e722e4e2367b34cb267d24324df7"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "3a52d4421716f2b06fdebf75f899fc4e"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "e918c80af15039f4e96925b64e8e4c31"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "7dccdb90e5a83c49928c7f6a35b438a4"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "30dedb7a4f4c69d3d05c097e621db954"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "d643911b62803b427b3d14bb977a7e59"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "d332e7cffc3a7275738554447a175531"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "773b74f6bbcf25a0b50dafeca4e18930"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "c64e51a0d41dcb39aead702abfbc28dc"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "dbf629fb38d8c25315b1ef885ee3d7ab"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "c7fa95b775dd0a2b545594108265d184"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "8e79955ad4aba4cea5fe29ea43199de0"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "2bf0e85c99e92720a0170d2932b8aef6"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "57363c5b138032f7889c460e7b83066a"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "e49663b3cea3d6dd9c365d3147224186"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "2cd54725e1a34bdc6a7b434b020b97ba"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "98cea059a763c57c8eee414d54fee1de"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "665015de1aa9a4264eca29b904458887"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "6c4b8bdfa198102f3a3343c6eb9b2cfb"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "1d6f6cbee1366fbf347c7443136e65d3"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "b868f6158eda25985b91b09e98448d43"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "071bf07c2e6fa38c3943821dadcce548"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "486723bed610063ae62d864d740c03c8"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "4a536a569c91222bed35d2843c742d79"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "e20ce7121d01afb02152de45a06ce010"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "1653b886ae2f22bb78d3c643adc88fb2"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "3c001431f8949bfdc74b100f3b2ffa78"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "b3a5cedecdee11c5f2ac905e9a618cdf"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "d16646f9b68b44d83230682bb0e31542"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "174162a9bd50d3bf7458e82361522ed9"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "46d709cb5bbe1e0ac608b4fe8a03f5c1"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "93b6e082935125fc4c7ea824b39fa994"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "668a65b72ae6d0c4c3d22992843f9cb1"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "c13daf61f2a0d8d75b26777d44c2d445"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "1333fea566ff73592f6869c4da91f990"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "f386c5b01fd486932369b97e2f06e3f3"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "37d4204ac299ae7cde69275ab893d466"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "c1a4471414d257b0989e9701df8aebe4"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "1c45eadafd8c23a4e373435a0e293398"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "dbe7f9c6bd0571c436d781e542820473"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "0b630c25ea1e22df0b04dfe4151cc2b0"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "f0961ede185f5bda7c6f1b5663c78339"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "ae9e5084b9d2e92b8ebb4c506df08481"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "65d67a1430d54f303b048b219bfadcab"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "d96b6e8356472956ce088b73eaa3b7f0"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "37750436a5e033c56ba98911a3e044fd"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "207eed0ea06387ef4256fe4735f5be80"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "44997c1913b24b5c56c1cc3ac57e4c1d"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "c898c9753c71f5679c99e065b43318c6"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "5c88a992472dba6966231c8fbd718ff5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "66cd3ed01999b9545be3cf6373a2766a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "b24a66b1b863e4fba38c90ccc64bd5f1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "cd376726ab7aec3754e5d664c4acaa64"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "3deafa373ee82fd3787b82869556a942"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "88b7bc55d65beeaa05ecadc9aeab55b3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "2799155ffc98017597846ad6e5591735"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "bf801cf508b17f2075e2e6a46ac6736f"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "93c08754951882b10c961b241423d578"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "f3d6acca2cb761a4c112e7b47809b0f9"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "5bba8c90787857a6a9cf5f925292c5a1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "05b833e31de296eced99aa40e1a5b3a3"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "55589b8ded1a92e8b56b94389d5d039d"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "53a4ca55c94837eb8047686939944b8d"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "7028011f5360e0eddf425edab7e13c4d"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "34a6c8cba2b7a73fc026e392ddfc92ea"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "c0dbe4018ce29239cf3971b349ad9c61"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "6528f56d2125c5331d7f2571341dfe11"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "abe18a0a42e62fd951d3e5ef6ad2ed10"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "620cfc07160e44294f8d1807bcbd3c22"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "04b605781127d74bfe64936112854cc0"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "adbaa358d139b5459a2f16257f108500"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "5f0ac201c2e08ea9ff4f06c5ff7c5e9b"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "4a35419354568e82c94261a53d9d2e81"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "bfc0894d3e2448b44913e9afe1f246d0"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "a64b5ed91cc6f9932e1de8c6976c5924"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "1e34aca9b2e88a4e51a05b8c6381c33f"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "65585ba67a60839c722da8baa1454db8"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "b6771b1d57084a3e9d5edbad92e61bcb"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "5b63dc7e642eb8821242852664d1d0c0"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "31c75762abe5dec471772c6f6615f8e7"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "e7c1595896b5d07c0af3f8767a3bbe53"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "6de86ac2a5ffb3cac0e32f3a863c375f"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "d3677e0c2f81a43e4797aa911ef7d8be"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "547193715e84afbcbfcad6fa0a44ca6b"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "17a69ef306ecbb59f9c6eefabba3b944"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "4684f9d18fc32097751b7f50d4b1bee0"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "ea2c641ecc44fd741e1526a7dd3afd9e"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "c5808fbe7f5cfef568c0b8a12cc1836c"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "e8cd497205d80efa86e0488130a0ac80"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "23989f51e1de67abf748e85642e6fb5f"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "d8032d1e388f4eac6851ec864cf81685"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "622d53fc4fa395bb44d8e3b46feb2c43"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "2119cf142f6119e3207c344cbcc0fe3b"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "25e006e7c927ed77b81457175848dda7"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "3828b04f2016641c1df22f7f3f235bdb"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "a2f8f3cff1ef5adb16dfc3e1282acd1c"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "a1bdcc6a583c68c3d103efed53280773"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "80c6bda2bed6d61fed5a56070d0151df"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "12fd54a9b0da7a84270a93578dee6160"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "5dc8cc6740223fd1bd04f4b8ca348349"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "ed34e8b617702087a2e4b453762c8dad"
  },
  {
    "url": "passages/2019-11-11-wirte-virtual-dom/index.html",
    "revision": "07c6679bc3bf03608b9f014cff12e7a5"
  },
  {
    "url": "passages/2019-11-23-promise-methods/index.html",
    "revision": "8a055743fd2d69a71af6e7ed3a96a604"
  },
  {
    "url": "passages/2019-11-25-how-insist-on-learning/index.html",
    "revision": "b9edf4b7b054a406d5c9e6470c245760"
  },
  {
    "url": "passages/2019-11-25-promise-a-plus/index.html",
    "revision": "041d6cfc15a2b747d6b34ef8f5bf6b55"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "a670158da0f7dde040f4d39a7e632d13"
  }
].concat(self.__precacheManifest || []);
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
