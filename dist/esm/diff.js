import { resolvePath } from "./typed-path";
import { diff as jiffDiff } from "jiff";
export function diff(from, to, basePath) {
    var operations = jiffDiff(from, to, {
        invertible: false, // Do not include test operations at the moment
    });
    var resolvedBasePath = "";
    if (basePath) {
        resolvedBasePath = resolvePath(basePath);
    }
    if (resolvedBasePath.endsWith("/")) {
        resolvedBasePath = resolvedBasePath.substr(0, resolvedBasePath.length - 1);
    }
    for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
        var operation = operations_1[_i];
        operation.path = resolvedBasePath + operation.path;
        if (operation.from) {
            operation.from = resolvedBasePath + operation.from;
        }
        // jiff.diff inserts a context property for each operation
        delete operation.context;
    }
    return operations;
}
//# sourceMappingURL=diff.js.map