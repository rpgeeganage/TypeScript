Input::
//// [/user/username/projects/myproject/src/main.ts]
import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";

//// [/user/username/projects/myproject/src/anotherFileReusingResolution.ts]
import { something } from "./filePresent";
import { something2 } from "./fileNotFound";

//// [/user/username/projects/myproject/src/filePresent.ts]
export function something() { return 10; }

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"module":"amd","composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"outFile.js"},"include":["src/**/*.ts"]}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/outFile.js]
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/main", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});


//// [/user/username/projects/myproject/outFile.d.ts]
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/main" { }


//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./src/filePresent.ts","./src/anotherFileReusingResolution.ts","./src/main.ts"],"js":{"sections":[{"pos":0,"end":516,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":162,"kind":"text"}]}},"program":{"fileNames":["../../../../a/lib/lib.d.ts","./src/filepresent.ts","./src/anotherfilereusingresolution.ts","./src/main.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"11598859296-export function something() { return 10; }","affectsGlobalScope":false},{"version":"-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false},{"version":"-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false}],"options":{"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"./outFile.js","project":"./","configFilePath":"./tsconfig.json"},"fileIdsList":[[2]],"referencedMap":[[3,1],[4,1]],"exportedModulesMap":[]},"version":"FakeTSVersion"}


/a/lib/tsc.js --p . -w --extendedDiagnostics
Output::
[[90m12:00:36 AM[0m] Starting compilation in watch mode...

Current directory: /user/username/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts"]
  options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/anotherFileReusingResolution.ts 250 undefined Source file
======== Resolving module './filePresent' from '/user/username/projects/myproject/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/user/username/projects/myproject/src/filePresent.ts' exist - use it as a name resolution result.
======== Module name './filePresent' was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/user/username/projects/myproject/src/anotherFileReusingResolution.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/user/username/projects/myproject/src/fileNotFound.ts' does not exist.
File '/user/username/projects/myproject/src/fileNotFound.tsx' does not exist.
File '/user/username/projects/myproject/src/fileNotFound.d.ts' does not exist.
File '/user/username/projects/myproject/src/fileNotFound.js' does not exist.
File '/user/username/projects/myproject/src/fileNotFound.jsx' does not exist.
======== Module name './fileNotFound' was not resolved. ========
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/filePresent.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/main.ts 250 undefined Source file
======== Resolving module './filePresent' from '/user/username/projects/myproject/src/main.ts'. ========
Resolution for module './filePresent' was found in cache from location '/user/username/projects/myproject/src'.
======== Module name './filePresent' was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'. ========
======== Resolving module './filePresent' from '/user/username/projects/myproject/src/main.ts'. ========
Resolution for module './filePresent' was found in cache from location '/user/username/projects/myproject/src'.
======== Module name './filePresent' was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'. ========
======== Resolving module './fileNotFound' from '/user/username/projects/myproject/src/main.ts'. ========
Resolution for module './fileNotFound' was found in cache from location '/user/username/projects/myproject/src'.
======== Module name './fileNotFound' was not resolved. ========
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
[96msrc/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[[90m12:00:46 AM[0m] Found 2 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory


Program root files: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/src/filePresent.ts
/user/username/projects/myproject/src/anotherFileReusingResolution.ts
/user/username/projects/myproject/src/main.ts

No cached semantic diagnostics in the builder::

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/src/anotherfilereusingresolution.ts:
  {"fileName":"/user/username/projects/myproject/src/anotherFileReusingResolution.ts","pollingInterval":250}
/user/username/projects/myproject/src/filepresent.ts:
  {"fileName":"/user/username/projects/myproject/src/filePresent.ts","pollingInterval":250}
/user/username/projects/myproject/src/main.ts:
  {"fileName":"/user/username/projects/myproject/src/main.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/src:
  {"directoryName":"/user/username/projects/myproject/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/outFile.js] file written with same contents
//// [/user/username/projects/myproject/outFile.d.ts] file written with same contents
//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./src/filePresent.ts","./src/anotherFileReusingResolution.ts","./src/main.ts"],"js":{"sections":[{"pos":0,"end":516,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":162,"kind":"text"}]}},"program":{"fileNames":["../../../../a/lib/lib.d.ts","./src/filepresent.ts","./src/anotherfilereusingresolution.ts","./src/main.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"11598859296-export function something() { return 10; }","affectsGlobalScope":false},{"version":"-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false},{"version":"-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false}],"options":{"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"./outFile.js","project":"./","watch":true,"extendedDiagnostics":true,"configFilePath":"./tsconfig.json"},"fileIdsList":[[2]],"referencedMap":[[3,1],[4,1]],"exportedModulesMap":[]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./src/filePresent.ts",
      "./src/anotherFileReusingResolution.ts",
      "./src/main.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 516,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 162,
          "kind": "text"
        }
      ]
    }
  },
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./src/filepresent.ts",
      "./src/anotherfilereusingresolution.ts",
      "./src/main.ts"
    ],
    "fileNamesList": [
      [
        "./src/filepresent.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "-9387417376-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "outFile": "./outFile.js",
      "project": "./",
      "watch": true,
      "extendedDiagnostics": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {}
  },
  "version": "FakeTSVersion",
  "size": 1545
}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.baseline.txt]
======================================================================
File:: /user/username/projects/myproject/outFile.js
----------------------------------------------------------------------
text: (0-516)
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/main", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});

======================================================================
======================================================================
File:: /user/username/projects/myproject/outFile.d.ts
----------------------------------------------------------------------
text: (0-162)
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/main" { }

======================================================================


Change:: Modify main file

Input::
//// [/user/username/projects/myproject/src/main.ts]
import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";something();


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/src/main.ts 1:: WatchInfo: /user/username/projects/myproject/src/main.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/src/main.ts 1:: WatchInfo: /user/username/projects/myproject/src/main.ts 250 undefined Source file
[[90m12:00:53 AM[0m] File change detected. Starting incremental compilation...

Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts"]
  options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/user/username/projects/myproject/src/main.ts' of old program, it was not resolved.
[96msrc/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";something();
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[[90m12:01:03 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/src/filePresent.ts
/user/username/projects/myproject/src/anotherFileReusingResolution.ts
/user/username/projects/myproject/src/main.ts

No cached semantic diagnostics in the builder::

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/src/anotherfilereusingresolution.ts:
  {"fileName":"/user/username/projects/myproject/src/anotherFileReusingResolution.ts","pollingInterval":250}
/user/username/projects/myproject/src/filepresent.ts:
  {"fileName":"/user/username/projects/myproject/src/filePresent.ts","pollingInterval":250}
/user/username/projects/myproject/src/main.ts:
  {"fileName":"/user/username/projects/myproject/src/main.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/src:
  {"directoryName":"/user/username/projects/myproject/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/outFile.js]
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/main", ["require", "exports", "src/filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});


//// [/user/username/projects/myproject/outFile.d.ts] file written with same contents
//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./src/filePresent.ts","./src/anotherFileReusingResolution.ts","./src/main.ts"],"js":{"sections":[{"pos":0,"end":586,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":162,"kind":"text"}]}},"program":{"fileNames":["../../../../a/lib/lib.d.ts","./src/filepresent.ts","./src/anotherfilereusingresolution.ts","./src/main.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"11598859296-export function something() { return 10; }","affectsGlobalScope":false},{"version":"-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false},{"version":"-12344353894-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();","affectsGlobalScope":false}],"options":{"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"./outFile.js","project":"./","watch":true,"extendedDiagnostics":true,"configFilePath":"./tsconfig.json"},"fileIdsList":[[2]],"referencedMap":[[3,1],[4,1]],"exportedModulesMap":[]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./src/filePresent.ts",
      "./src/anotherFileReusingResolution.ts",
      "./src/main.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 586,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 162,
          "kind": "text"
        }
      ]
    }
  },
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./src/filepresent.ts",
      "./src/anotherfilereusingresolution.ts",
      "./src/main.ts"
    ],
    "fileNamesList": [
      [
        "./src/filepresent.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "-12344353894-import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "outFile": "./outFile.js",
      "project": "./",
      "watch": true,
      "extendedDiagnostics": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts"
      ]
    },
    "exportedModulesMap": {}
  },
  "version": "FakeTSVersion",
  "size": 1558
}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.baseline.txt]
======================================================================
File:: /user/username/projects/myproject/outFile.js
----------------------------------------------------------------------
text: (0-586)
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/main", ["require", "exports", "src/filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});

======================================================================
======================================================================
File:: /user/username/projects/myproject/outFile.d.ts
----------------------------------------------------------------------
text: (0-162)
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/main" { }

======================================================================


Change:: Add new module and update main file

Input::
//// [/user/username/projects/myproject/src/main.ts]
import { foo } from "./newFile";import { something } from "./filePresent";
import { something as something1 } from "./filePresent";
import { something2 } from "./fileNotFound";something();

//// [/user/username/projects/myproject/src/newFile.ts]
export function foo() { return 20; }


Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/newFile.ts :: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory
Scheduling update
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/newFile.ts :: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory
FileWatcher:: Triggered with /user/username/projects/myproject/src/main.ts 1:: WatchInfo: /user/username/projects/myproject/src/main.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/src/main.ts 1:: WatchInfo: /user/username/projects/myproject/src/main.ts 250 undefined Source file
[[90m12:01:14 AM[0m] File change detected. Starting incremental compilation...

Reloading new file names and options
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts","/user/username/projects/myproject/src/newFile.ts"]
  options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/user/username/projects/myproject/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/user/username/projects/myproject/src/main.ts' of old program, it was not resolved.
======== Resolving module './newFile' from '/user/username/projects/myproject/src/main.ts'. ========
Module resolution kind is not specified, using 'Classic'.
File '/user/username/projects/myproject/src/newFile.ts' exist - use it as a name resolution result.
======== Module name './newFile' was successfully resolved to '/user/username/projects/myproject/src/newFile.ts'. ========
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/newFile.ts 250 undefined Source file
[96msrc/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";something();
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[[90m12:01:24 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts","/user/username/projects/myproject/src/newFile.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/src/filePresent.ts
/user/username/projects/myproject/src/anotherFileReusingResolution.ts
/user/username/projects/myproject/src/newFile.ts
/user/username/projects/myproject/src/main.ts

No cached semantic diagnostics in the builder::

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/src/anotherfilereusingresolution.ts:
  {"fileName":"/user/username/projects/myproject/src/anotherFileReusingResolution.ts","pollingInterval":250}
/user/username/projects/myproject/src/filepresent.ts:
  {"fileName":"/user/username/projects/myproject/src/filePresent.ts","pollingInterval":250}
/user/username/projects/myproject/src/main.ts:
  {"fileName":"/user/username/projects/myproject/src/main.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/src/newfile.ts:
  {"fileName":"/user/username/projects/myproject/src/newFile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/src:
  {"directoryName":"/user/username/projects/myproject/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/outFile.js]
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/newFile", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.foo = void 0;
    function foo() { return 20; }
    exports.foo = foo;
});
define("src/main", ["require", "exports", "src/filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});


//// [/user/username/projects/myproject/outFile.d.ts]
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/newFile" {
    export function foo(): number;
}
declare module "src/main" { }


//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./src/filePresent.ts","./src/anotherFileReusingResolution.ts","./src/newFile.ts","./src/main.ts"],"js":{"sections":[{"pos":0,"end":798,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":230,"kind":"text"}]}},"program":{"fileNames":["../../../../a/lib/lib.d.ts","./src/filepresent.ts","./src/anotherfilereusingresolution.ts","./src/newfile.ts","./src/main.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"11598859296-export function something() { return 10; }","affectsGlobalScope":false},{"version":"-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false},{"version":"4428918903-export function foo() { return 20; }","affectsGlobalScope":false},{"version":"28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();","affectsGlobalScope":false}],"options":{"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"./outFile.js","project":"./","watch":true,"extendedDiagnostics":true,"configFilePath":"./tsconfig.json"},"fileIdsList":[[2],[2,4]],"referencedMap":[[3,1],[5,2]],"exportedModulesMap":[]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./src/filePresent.ts",
      "./src/anotherFileReusingResolution.ts",
      "./src/newFile.ts",
      "./src/main.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 798,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 230,
          "kind": "text"
        }
      ]
    }
  },
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./src/filepresent.ts",
      "./src/anotherfilereusingresolution.ts",
      "./src/newfile.ts",
      "./src/main.ts"
    ],
    "fileNamesList": [
      [
        "./src/filepresent.ts"
      ],
      [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "affectsGlobalScope": false
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "outFile": "./outFile.js",
      "project": "./",
      "watch": true,
      "extendedDiagnostics": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {}
  },
  "version": "FakeTSVersion",
  "size": 1724
}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.baseline.txt]
======================================================================
File:: /user/username/projects/myproject/outFile.js
----------------------------------------------------------------------
text: (0-798)
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/newFile", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.foo = void 0;
    function foo() { return 20; }
    exports.foo = foo;
});
define("src/main", ["require", "exports", "src/filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});

======================================================================
======================================================================
File:: /user/username/projects/myproject/outFile.d.ts
----------------------------------------------------------------------
text: (0-230)
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/newFile" {
    export function foo(): number;
}
declare module "src/main" { }

======================================================================


Change:: Write file that could not be resolved

Input::
//// [/user/username/projects/myproject/src/fileNotFound.ts]
export function something2() { return 20; }


Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/fileNotFound.ts :: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory
Scheduling update
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/fileNotFound.ts :: WatchInfo: /user/username/projects/myproject/src 1 undefined Wild card directory
[[90m12:01:33 AM[0m] File change detected. Starting incremental compilation...

Reloading new file names and options
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/fileNotFound.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts","/user/username/projects/myproject/src/newFile.ts"]
  options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/anotherFileReusingResolution.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/user/username/projects/myproject/src/anotherFileReusingResolution.ts' of old program, it was not resolved.
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileNotFound.ts 250 undefined Source file
Reusing resolution of module './newFile' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/newFile.ts'.
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './filePresent' from '/user/username/projects/myproject/src/main.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/filePresent.ts'.
Reusing resolution of module './fileNotFound' from '/user/username/projects/myproject/src/main.ts' of old program, it was not resolved.
[96msrc/anotherFileReusingResolution.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m2[0m import { something2 } from "./fileNotFound";
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[96msrc/main.ts[0m:[93m3[0m:[93m28[0m - [91merror[0m[90m TS2792: [0mCannot find module './fileNotFound'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m3[0m import { something2 } from "./fileNotFound";something();
[7m [0m [91m                           ~~~~~~~~~~~~~~~~[0m

[[90m12:01:43 AM[0m] Found 2 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/src/anotherFileReusingResolution.ts","/user/username/projects/myproject/src/fileNotFound.ts","/user/username/projects/myproject/src/filePresent.ts","/user/username/projects/myproject/src/main.ts","/user/username/projects/myproject/src/newFile.ts"]
Program options: {"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"/user/username/projects/myproject/outFile.js","project":"/user/username/projects/myproject","watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/src/filePresent.ts
/user/username/projects/myproject/src/anotherFileReusingResolution.ts
/user/username/projects/myproject/src/fileNotFound.ts
/user/username/projects/myproject/src/newFile.ts
/user/username/projects/myproject/src/main.ts

No cached semantic diagnostics in the builder::

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/src/anotherfilereusingresolution.ts:
  {"fileName":"/user/username/projects/myproject/src/anotherFileReusingResolution.ts","pollingInterval":250}
/user/username/projects/myproject/src/filepresent.ts:
  {"fileName":"/user/username/projects/myproject/src/filePresent.ts","pollingInterval":250}
/user/username/projects/myproject/src/main.ts:
  {"fileName":"/user/username/projects/myproject/src/main.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/src/newfile.ts:
  {"fileName":"/user/username/projects/myproject/src/newFile.ts","pollingInterval":250}
/user/username/projects/myproject/src/filenotfound.ts:
  {"fileName":"/user/username/projects/myproject/src/fileNotFound.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/src:
  {"directoryName":"/user/username/projects/myproject/src","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/outFile.js]
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/fileNotFound", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something2 = void 0;
    function something2() { return 20; }
    exports.something2 = something2;
});
define("src/newFile", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.foo = void 0;
    function foo() { return 20; }
    exports.foo = foo;
});
define("src/main", ["require", "exports", "src/filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});


//// [/user/username/projects/myproject/outFile.d.ts]
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/fileNotFound" {
    export function something2(): number;
}
declare module "src/newFile" {
    export function foo(): number;
}
declare module "src/main" { }


//// [/user/username/projects/myproject/outFile.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"./","sourceFiles":["./src/filePresent.ts","./src/anotherFileReusingResolution.ts","./src/fileNotFound.ts","./src/newFile.ts","./src/main.ts"],"js":{"sections":[{"pos":0,"end":1043,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":310,"kind":"text"}]}},"program":{"fileNames":["../../../../a/lib/lib.d.ts","./src/filepresent.ts","./src/anotherfilereusingresolution.ts","./src/filenotfound.ts","./src/newfile.ts","./src/main.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"11598859296-export function something() { return 10; }","affectsGlobalScope":false},{"version":"-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";","affectsGlobalScope":false},{"version":"-497034637-export function something2() { return 20; }","affectsGlobalScope":false},{"version":"4428918903-export function foo() { return 20; }","affectsGlobalScope":false},{"version":"28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();","affectsGlobalScope":false}],"options":{"module":2,"composite":true,"persistResolutions":true,"traceResolution":true,"outFile":"./outFile.js","project":"./","watch":true,"extendedDiagnostics":true,"configFilePath":"./tsconfig.json"},"fileIdsList":[[2],[2,5]],"referencedMap":[[3,1],[6,2]],"exportedModulesMap":[]},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./src/filePresent.ts",
      "./src/anotherFileReusingResolution.ts",
      "./src/fileNotFound.ts",
      "./src/newFile.ts",
      "./src/main.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 1043,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 310,
          "kind": "text"
        }
      ]
    }
  },
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.d.ts",
      "./src/filepresent.ts",
      "./src/anotherfilereusingresolution.ts",
      "./src/filenotfound.ts",
      "./src/newfile.ts",
      "./src/main.ts"
    ],
    "fileNamesList": [
      [
        "./src/filepresent.ts"
      ],
      [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./src/filepresent.ts": {
        "version": "11598859296-export function something() { return 10; }",
        "affectsGlobalScope": false
      },
      "./src/anotherfilereusingresolution.ts": {
        "version": "-18180953903-import { something } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";",
        "affectsGlobalScope": false
      },
      "./src/filenotfound.ts": {
        "version": "-497034637-export function something2() { return 20; }",
        "affectsGlobalScope": false
      },
      "./src/newfile.ts": {
        "version": "4428918903-export function foo() { return 20; }",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "28260231563-import { foo } from \"./newFile\";import { something } from \"./filePresent\";\nimport { something as something1 } from \"./filePresent\";\nimport { something2 } from \"./fileNotFound\";something();",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "module": 2,
      "composite": true,
      "persistResolutions": true,
      "traceResolution": true,
      "outFile": "./outFile.js",
      "project": "./",
      "watch": true,
      "extendedDiagnostics": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./src/anotherfilereusingresolution.ts": [
        "./src/filepresent.ts"
      ],
      "./src/main.ts": [
        "./src/filepresent.ts",
        "./src/newfile.ts"
      ]
    },
    "exportedModulesMap": {}
  },
  "version": "FakeTSVersion",
  "size": 1869
}

//// [/user/username/projects/myproject/outFile.tsbuildinfo.baseline.txt]
======================================================================
File:: /user/username/projects/myproject/outFile.js
----------------------------------------------------------------------
text: (0-1043)
define("src/filePresent", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something = void 0;
    function something() { return 10; }
    exports.something = something;
});
define("src/anotherFileReusingResolution", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("src/fileNotFound", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.something2 = void 0;
    function something2() { return 20; }
    exports.something2 = something2;
});
define("src/newFile", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.foo = void 0;
    function foo() { return 20; }
    exports.foo = foo;
});
define("src/main", ["require", "exports", "src/filePresent"], function (require, exports, filePresent_1) {
    "use strict";
    exports.__esModule = true;
    (0, filePresent_1.something)();
});

======================================================================
======================================================================
File:: /user/username/projects/myproject/outFile.d.ts
----------------------------------------------------------------------
text: (0-310)
declare module "src/filePresent" {
    export function something(): number;
}
declare module "src/anotherFileReusingResolution" { }
declare module "src/fileNotFound" {
    export function something2(): number;
}
declare module "src/newFile" {
    export function foo(): number;
}
declare module "src/main" { }

======================================================================

