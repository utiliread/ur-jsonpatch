import { typedPath } from './typed-path';
export class Patch {
    constructor() {
        this.operations = [];
    }
    Add(path, value) {
        this.operations.push({ op: 'add', path: resolvePath(path), value: value });
        return this;
    }
    Remove(path) {
        this.operations.push({ op: 'remove', path: resolvePath(path) });
        return this;
    }
    Replace(path, value) {
        this.operations.push({ op: 'replace', path: resolvePath(path), value: value });
        return this;
    }
    Copy(from, path) {
        this.operations.push({ op: 'copy', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }
    Move(from, path) {
        this.operations.push({ op: 'move', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }
    test(path, value) {
        this.operations.push({ op: 'test', path: resolvePath(path), value: value });
        return this;
    }
}
function resolvePath(path) {
    if (typeof path === 'string') {
        return path;
    }
    else if (path instanceof Function) {
        return path(typedPath()).path();
    }
    else {
        return path.path();
    }
}
