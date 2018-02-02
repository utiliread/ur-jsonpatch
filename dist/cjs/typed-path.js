"use strict";
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
Object.defineProperty(exports, "__esModule", { value: true });
const toStringMethods = [
    'toString',
    'path',
    Symbol.toStringTag,
    'valueOf'
];
function pathToString(path) {
    return path.reduce((accumulated, current) => {
        if (+current === +current) {
            return accumulated + `/${current}`;
        }
        else if (accumulated !== '/') {
            return accumulated + `/${current}`;
        }
        else {
            return accumulated + current;
        }
    }, '/');
}
function typedPath(path = []) {
    return new Proxy({}, {
        get(target, name) {
            if (toStringMethods.includes(name)) {
                return () => pathToString(path);
            }
            return typedPath([...path, name.toString()]);
        }
    });
}
exports.typedPath = typedPath;
function resolvePath(path) {
    if (typeof path === 'string') {
        return path;
    }
    else if (isBuiltPath(path)) {
        return path.path();
    }
    else {
        return path(typedPath()).path();
    }
}
exports.resolvePath = resolvePath;
function isBuiltPath(path) {
    return typeof path.path === 'function';
}
//# sourceMappingURL=typed-path.js.map