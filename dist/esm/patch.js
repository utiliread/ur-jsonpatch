import { resolvePath } from './typed-path';
var Patch = /** @class */ (function () {
    function Patch() {
        this.operations = [];
    }
    Patch.prototype.add = function (path, value) {
        this.operations.push({ op: 'add', path: resolvePath(path), value: value });
        return this;
    };
    Patch.prototype.addEnd = function (path, value) {
        this.operations.push({ op: 'add', path: resolvePath(path) + "/-", value: value });
        return this;
    };
    Patch.prototype.remove = function (path) {
        this.operations.push({ op: 'remove', path: resolvePath(path) });
        return this;
    };
    Patch.prototype.replace = function (path, value) {
        this.operations.push({ op: 'replace', path: resolvePath(path), value: value });
        return this;
    };
    Patch.prototype.copy = function (from, path) {
        this.operations.push({ op: 'copy', from: resolvePath(from), path: resolvePath(path) });
        return this;
    };
    Patch.prototype.move = function (from, path) {
        this.operations.push({ op: 'move', from: resolvePath(from), path: resolvePath(path) });
        return this;
    };
    Patch.prototype.test = function (path, value) {
        this.operations.push({ op: 'test', path: resolvePath(path), value: value });
        return this;
    };
    return Patch;
}());
export { Patch };
//# sourceMappingURL=patch.js.map