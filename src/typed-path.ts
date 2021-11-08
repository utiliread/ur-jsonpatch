// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540

export type TypedPathBuilder<T> = {
  [P in keyof T]: TypedPathBuilder<T[P]>;
} & TypedPathBuilderDeferred<T>;

export interface TypedPathBuilderDeferred<T> {
  (): T;
  [index: number]: TypedPathBuilder<T[any]>;
  path: () => string;
}

export type Path<TDocument, TDestination> =
  | ((x: TypedPathBuilder<TDocument>) => BuiltPath<TDestination>)
  | BuiltPath<TDestination>
  | string;

export interface BuiltPath<TDestination> {
  path: () => string;
}

const toStringMethods: (string | symbol | number)[] = [
  "toString",
  "path",
  Symbol.toStringTag,
  "valueOf",
];

function pathToString(path: string[]): string {
  return path.reduce((accumulated, current) => {
    if (+current === +current) {
      return accumulated + `/${current}`;
    } else if (accumulated !== "/") {
      return accumulated + `/${current}`;
    } else {
      return accumulated + current;
    }
  }, "/");
}

export function typedPath<T>(path: string[] = []): TypedPathBuilder<T> {
  return <TypedPathBuilder<T>>new Proxy(
    {},
    {
      get(target: T, name: string | symbol | number) {
        if (toStringMethods.includes(name)) {
          return () => pathToString(path);
        }

        return typedPath([...path, name.toString()]);
      },
    }
  );
}

export function resolvePath<TDocument, TDestination>(
  path: Path<TDocument, TDestination>
) {
  if (typeof path === "string") {
    return path;
  } else if (isBuiltPath(path)) {
    return path.path();
  } else {
    return path(typedPath<TDocument>()).path();
  }
}

function isBuiltPath<TDocument, TDestination>(
  path: Path<TDocument, TDestination>
): path is BuiltPath<TDestination> {
  return typeof (<any>path).path === "function";
}
