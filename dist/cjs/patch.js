"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typed_path_1 = require("./typed-path");
class Patch {
    constructor() {
        this.operations = [];
    }
    add(path, value) {
        this.operations.push({ op: 'add', path: typed_path_1.resolvePath(path), value: value });
        return this;
    }
    remove(path) {
        this.operations.push({ op: 'remove', path: typed_path_1.resolvePath(path) });
        return this;
    }
    replace(path, value) {
        this.operations.push({ op: 'replace', path: typed_path_1.resolvePath(path), value: value });
        return this;
    }
    copy(from, path) {
        this.operations.push({ op: 'copy', from: typed_path_1.resolvePath(from), path: typed_path_1.resolvePath(path) });
        return this;
    }
    move(from, path) {
        this.operations.push({ op: 'move', from: typed_path_1.resolvePath(from), path: typed_path_1.resolvePath(path) });
        return this;
    }
    test(path, value) {
        this.operations.push({ op: 'test', path: typed_path_1.resolvePath(path), value: value });
        return this;
    }
}
exports.Patch = Patch;
//# sourceMappingURL=patch.js.map