// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
var toStringMethods = [
    'toString',
    'path',
    Symbol.toStringTag,
    'valueOf'
];
function pathToString(path) {
    return path.reduce(function (accumulated, current) {
        if (+current === +current) {
            return accumulated + ("/" + current);
        }
        else if (accumulated !== '/') {
            return accumulated + ("/" + current);
        }
        else {
            return accumulated + current;
        }
    }, '/');
}
export function typedPath(path) {
    if (path === void 0) { path = []; }
    return new Proxy({}, {
        get: function (target, name) {
            if (toStringMethods.includes(name)) {
                return function () { return pathToString(path); };
            }
            return typedPath(path.concat([name.toString()]));
        }
    });
}
export function resolvePath(path) {
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
function isBuiltPath(path) {
    return typeof path.path === 'function';
}
//# sourceMappingURL=typed-path.js.map