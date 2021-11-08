import { Path, resolvePath } from "./typed-path";

import { Operation } from "./operations";

export class Patch<TDocument> {
  operations: Operation[] = [];

  add<TDestination>(
    path: Path<TDocument, TDestination>,
    value: TDestination
  ): this {
    this.operations.push({ op: "add", path: resolvePath(path), value: value });
    return this;
  }

  addEnd<TDestination>(
    path: Path<TDocument, TDestination>,
    value: TDestination
  ): this {
    this.operations.push({
      op: "add",
      path: resolvePath(path) + "/-",
      value: value,
    });
    return this;
  }

  remove<TDestination>(path: Path<TDocument, TDestination>): this {
    this.operations.push({ op: "remove", path: resolvePath(path) });
    return this;
  }

  replace<TDestination>(
    path: Path<TDocument, TDestination>,
    value: TDestination
  ): this {
    this.operations.push({
      op: "replace",
      path: resolvePath(path),
      value: value,
    });
    return this;
  }

  copy<TDestination>(
    from: Path<TDocument, TDestination>,
    path: Path<TDocument, TDestination>
  ): this {
    this.operations.push({
      op: "copy",
      from: resolvePath(from),
      path: resolvePath(path),
    });
    return this;
  }

  move<TDestination>(
    from: Path<TDocument, TDestination>,
    path: Path<TDocument, TDestination>
  ): this {
    this.operations.push({
      op: "move",
      from: resolvePath(from),
      path: resolvePath(path),
    });
    return this;
  }

  test<TDestination>(
    path: Path<TDocument, TDestination>,
    value: TDestination
  ): this {
    this.operations.push({ op: "test", path: resolvePath(path), value: value });
    return this;
  }
}
