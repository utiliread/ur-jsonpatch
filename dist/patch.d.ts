import { TypedPathBuilder } from './typed-path';
import { Operation } from 'fast-json-patch';
export declare type Path<T> = ((x: TypedPathBuilder<T>) => BuiltPath) | BuiltPath | string;
export interface BuiltPath {
    path: () => string;
}
export declare class Patch<T> {
    operations: Operation[];
    add(path: Path<T>, value: any): Patch<T>;
    remove(path: Path<T>): Patch<T>;
    replace(path: Path<T>, value: any): Patch<T>;
    copy(from: Path<T>, path: Path<T>): Patch<T>;
    move(from: Path<T>, path: Path<T>): Patch<T>;
    test(path: Path<T>, value: any): Patch<T>;
}
