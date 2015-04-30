{"changed":true,"filter":false,"title":"player.js","tooltip":"/www/js/player.js","value":"var audio = {\n    extPath: \"\",\n    devicePlatform: window.device.platform,\n    initialize: function () {\n        alert(\"inside initialize\");\n        if (audio.devicePlatform === \"Android\") {\n            audio.extPath = cordova.file.externalDataDirectory;\n        } else {\n            audio.extPath = cordova.file.applicationStorageDirectory + \"Documents/\";\n        }\n    },\n    // Plays a sound file that is located inside the project dir\n    playInternal: function (url) {\n        if (audio.devicePlatform === \"Android\") {\n            url = \"/android_asset/www/\" + url;\n        }\n         \n        var my_media = new Media(url,null, null);\n        my_media.play();\n    },\n    // Plays a sound file located outside the project dir\n    playExternal: function (url) {\n        if (audio.devicePlatform === \"Android\") {\n            url = audio.extPath + url;\n        } else {\n            // Media plugin needs the documents://!\n            url = \"documents://\" + url;\n        }\n          \n        var my_media = \n            new Media(url, \n                      function () { \n                        alert(\"played ok\"); \n                      }, \n                      function (error) { \n                        alert(\"Error playing media: \" + error.message);\n                      });\n        my_media.play();\n    }\n}","undoManager":{"mark":89,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":35},"end":{"row":25,"column":43},"action":"remove","lines":["fileName"]},{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":23},"end":{"row":29,"column":0},"action":"insert","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":8},"end":{"row":29,"column":12},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":12},"end":{"row":29,"column":16},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":12},"end":{"row":29,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"remove","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":22},"end":{"row":29,"column":30},"action":"remove","lines":["fileName"]},{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":18},"end":{"row":22,"column":21},"action":"remove","lines":["app"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":16},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":12},"end":{"row":2,"column":34},"action":"insert","lines":["window.device.platform"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":12},"end":{"row":5,"column":34},"action":"remove","lines":["window.device.platform"]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":12},"end":{"row":13,"column":18},"action":"remove","lines":["window"]},{"start":{"row":13,"column":12},"end":{"row":13,"column":17},"action":"insert","lines":["audio"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":25},"end":{"row":13,"column":33},"action":"remove","lines":["platform"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":12},"end":{"row":22,"column":18},"action":"remove","lines":["window"]},{"start":{"row":22,"column":12},"end":{"row":22,"column":17},"action":"insert","lines":["audio"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":25},"end":{"row":22,"column":33},"action":"remove","lines":["platform"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":18},"end":{"row":5,"column":24},"action":"remove","lines":["device"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":32},"action":"insert","lines":["devicePlatform"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":24},"action":"remove","lines":["device"]},{"start":{"row":13,"column":18},"end":{"row":13,"column":32},"action":"insert","lines":["devicePlatform"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":18},"end":{"row":22,"column":24},"action":"remove","lines":["device"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":32},"action":"insert","lines":["devicePlatform"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":32},"end":{"row":22,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1430153927448}