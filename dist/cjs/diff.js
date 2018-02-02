"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_path_1 = require("./typed-path");
const jiff_1 = require("jiff");
function diff(from, to, basePath) {
    let operations = jiff_1.diff(from, to, {
        invertible: false // Do not include test operations at the moment
    });
    let resolvedBasePath = '';
    if (basePath) {
        resolvedBasePath = typed_path_1.resolvePath(basePath);
    }
    if (resolvedBasePath.endsWith('/')) {
        resolvedBasePath = resolvedBasePath.substr(0, resolvedBasePath.length - 1);
    }
    for (let operation of operations) {
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