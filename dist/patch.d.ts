import { TypedPathBuilder } from './typed-path';
import { Operation } from 'fast-json-patch';
export declare type Path<T> = ((x: TypedPathBuilder<T>) => BuiltPath) | BuiltPath | string;
export interface BuiltPath {
    path: () => string;
}
export declare class Patch<T> {
    operations: Operation[];
    Add(path: Path<T>, value: any): Patch<T>;
    Remove(path: Path<T>): Patch<T>;
    Replace(path: Path<T>, value: any): Patch<T>;
    Copy(from: Path<T>, path: Path<T>): Patch<T>;
    Move(from: Path<T>, path: Path<T>): Patch<T>;
    test(path: Path<T>, value: any): Patch<T>;
}
