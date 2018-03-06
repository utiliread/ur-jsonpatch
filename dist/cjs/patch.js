"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typed_path_1 = require("./typed-path");
var Patch = /** @class */ (function () {
    function Patch() {
        this.operations = [];
    }
    Patch.prototype.add = function (path, value) {
        this.operations.push({ op: 'add', path: typed_path_1.resolvePath(path), value: value });
        return this;
    };
    Patch.prototype.remove = function (path) {
        this.operations.push({ op: 'remove', path: typed_path_1.resolvePath(path) });
        return this;
    };
    Patch.prototype.replace = function (path, value) {
        this.operations.push({ op: 'replace', path: typed_path_1.resolvePath(path), value: value });
        return this;
    };
    Patch.prototype.copy = function (from, path) {
        this.operations.push({ op: 'copy', from: typed_path_1.resolvePath(from), path: typed_path_1.resolvePath(path) });
        return this;
    };
    Patch.prototype.move = function (from, path) {
        this.operations.push({ op: 'move', from: typed_path_1.resolvePath(from), path: typed_path_1.resolvePath(path) });
        return this;
    };
    Patch.prototype.test = function (path, value) {
        this.operations.push({ op: 'test', path: typed_path_1.resolvePath(path), value: value });
        return this;
    };
    return Patch;
}());
exports.Patch = Patch;
//# sourceMappingURL=patch.js.map