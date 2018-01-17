export declare type TypedPathBuilder<T> = {
    [P in keyof T]: TypedPathBuilder<T[P]>;
} & TypedPathBuilderDeferred<T>;
export interface TypedPathBuilderDeferred<T> {
    (): T;
    [index: number]: TypedPathBuilder<T[any]>;
    path: () => string;
}
export declare type Path<TDocument, TDestination> = ((x: TypedPathBuilder<TDocument>) => BuiltPath<TDestination>) | BuiltPath<TDestination> | string;
export interface BuiltPath<TDestination> {
    path: () => string;
}
export declare function typedPath<T>(path?: string[]): TypedPathBuilder<T>;
export declare function resolvePath<TDocument, TDestination>(path: Path<TDocument, TDestination>): string;
