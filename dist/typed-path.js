// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
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
export function typedPath(path = []) {
    return new Proxy({}, {
        get(target, name) {
            if (toStringMethods.includes(name)) {
                return () => pathToString(path);
            }
            return typedPath([...path, name.toString()]);
        }
    });
}
