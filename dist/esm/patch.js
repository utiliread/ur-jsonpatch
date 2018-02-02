import { resolvePath } from './typed-path';
export class Patch {
    constructor() {
        this.operations = [];
    }
    add(path, value) {
        this.operations.push({ op: 'add', path: resolvePath(path), value: value });
        return this;
    }
    remove(path) {
        this.operations.push({ op: 'remove', path: resolvePath(path) });
        return this;
    }
    replace(path, value) {
        this.operations.push({ op: 'replace', path: resolvePath(path), value: value });
        return this;
    }
    copy(from, path) {
        this.operations.push({ op: 'copy', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }
    move(from, path) {
        this.operations.push({ op: 'move', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }
    test(path, value) {
        this.operations.push({ op: 'test', path: resolvePath(path), value: value });
        return this;
    }
}
//# sourceMappingURL=patch.js.map