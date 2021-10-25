"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch = void 0;
var typed_path_1 = require("./typed-path");
var Patch = /** @class */ (function () {
    function Patch() {
        this.operations = [];
    }
    Patch.prototype.add = function (path, value) {
        this.operations.push({ op: 'add', path: (0, typed_path_1.resolvePath)(path), value: value });
        return this;
    };
    Patch.prototype.addEnd = function (path, value) {
        this.operations.push({ op: 'add', path: (0, typed_path_1.resolvePath)(path) + "/-", value: value });
        return this;
    };
    Patch.prototype.remove = function (path) {
        this.operations.push({ op: 'remove', path: (0, typed_path_1.resolvePath)(path) });
        return this;
    };
    Patch.prototype.replace = function (path, value) {
        this.operations.push({ op: 'replace', path: (0, typed_path_1.resolvePath)(path), value: value });
        return this;
    };
    Patch.prototype.copy = function (from, path) {
        this.operations.push({ op: 'copy', from: (0, typed_path_1.resolvePath)(from), path: (0, typed_path_1.resolvePath)(path) });
        return this;
    };
    Patch.prototype.move = function (from, path) {
        this.operations.push({ op: 'move', from: (0, typed_path_1.resolvePath)(from), path: (0, typed_path_1.resolvePath)(path) });
        return this;
    };
    Patch.prototype.test = function (path, value) {
        this.operations.push({ op: 'test', path: (0, typed_path_1.resolvePath)(path), value: value });
        return this;
    };
    return Patch;
}());
exports.Patch = Patch;
//# sourceMappingURL=patch.js.map