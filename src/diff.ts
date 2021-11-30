import { Path, resolvePath } from "./typed-path";

import { Operation } from "./operations";
import { diff as jiffDiff } from "jiff";

export function diff<TDocument = any, TDestination = any>(
  from: TDestination,
  to: TDestination,
  basePath?: Path<TDocument, TDestination>
): Operation[] {
  const operations = jiffDiff(from, to, {
    invertible: false, // Do not include test operations at the moment
  });

  let resolvedBasePath = "";

  if (basePath) {
    resolvedBasePath = resolvePath(basePath);
  }

  if (resolvedBasePath.endsWith("/")) {
    resolvedBasePath = resolvedBasePath.substr(0, resolvedBasePath.length - 1);
  }

  for (const operation of operations) {
    operation.path = resolvedBasePath + operation.path;

    if (operation.from) {
      operation.from = resolvedBasePath + operation.from;
    }

    // jiff.diff inserts a context property for each operation
    delete operation.context;
  }

  return operations;
}
