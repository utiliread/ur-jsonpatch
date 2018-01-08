export declare type TypedPathBuilder<T> = {
    [P in keyof T]: TypedPathBuilder<T[P]>;
} & TypedPathBuilderDeferred<T>;
export interface TypedPathBuilderDeferred<T> {
    (): T;
    [index: number]: TypedPathBuilder<T[any]>;
    path: () => string;
}
export declare function typedPath<T>(path?: string[]): TypedPathBuilder<T>;
