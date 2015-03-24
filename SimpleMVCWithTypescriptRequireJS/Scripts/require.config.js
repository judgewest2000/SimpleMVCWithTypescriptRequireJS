/// <reference path="typings/require/require.d.ts" />
// require.js looks for the following global when initializing
require.config({
    baseUrl: "../Scripts/",
    paths: {
        "bootstrap": "bootstrap",
        "jquery": "jquery-2.1.3",
        "knockout": "knockout",
        "knockout-mapping": "knockout-mapping",
        "underscore": "underscore",
        "global": "custom/global",
        "globalenums": "custom/globalenums"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
});
//# sourceMappingURL=require.config.js.map