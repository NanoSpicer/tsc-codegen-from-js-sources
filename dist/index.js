"use strict";
exports.__esModule = true;
var lib_1 = require("./javascriptSrc/lib");
console.log(lib_1.jsdocMultiply(2, 2), lib_1.noJsdocMultiply(2, 2), lib_1.FREE_MEMORY);
for (var _i = 0, _a = [1, 2, 3, 4]; _i < _a.length; _i++) {
    var item = _a[_i];
    var samp = { id: item, name: "name\u2013" + item };
    console.log("Hello world from typescript! " + samp);
}
