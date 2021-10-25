"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diff = void 0;
var typed_path_1 = require("./typed-path");
var jiff_1 = require("jiff");
function diff(from, to, basePath) {
    var operations = (0, jiff_1.diff)(from, to, {
        invertible: false // Do not include test operations at the moment
    });
    var resolvedBasePath = '';
    if (basePath) {
        resolvedBasePath = (0, typed_path_1.resolvePath)(basePath);
    }
    if (resolvedBasePath.endsWith('/')) {
        resolvedBasePath = resolvedBasePath.substr(0, resolvedBasePath.length - 1);
    }
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        operation.path = resolvedBasePath + operation.path;
        if (operation.from) {
            operation.from = resolvedBasePath + operation.from;
        }
        // jiff.diff inserts a context property for each operation
        delete operation.context;
    }
    return operations;
}
exports.diff = diff;
//# sourceMappingURL=diff.js.map