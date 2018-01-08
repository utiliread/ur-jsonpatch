import { TypedPathBuilder, typedPath } from './typed-path';

import { Operation } from 'fast-json-patch';

export type Path<T> = ((x: TypedPathBuilder<T>) => BuiltPath) | BuiltPath | string;

export interface BuiltPath {
    path: () => string
}

export class Patch<T> {
    operations: Operation[] = [];

    Add(path: Path<T>, value: any): Patch<T> {
        this.operations.push({ op: 'add', path: resolvePath(path), value: value });
        return this;
    }

    Remove(path: Path<T>): Patch<T> {
        this.operations.push({ op: 'remove', path: resolvePath(path) });
        return this;
    }

    Replace(path: Path<T>, value: any): Patch<T> {
        this.operations.push({ op: 'replace', path: resolvePath(path), value: value });
        return this;
    }

    Copy(from: Path<T>, path: Path<T>): Patch<T> {
        this.operations.push({ op: 'copy', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }

    Move(from: Path<T>, path: Path<T>): Patch<T> {
        this.operations.push({ op: 'move', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }

    test(path: Path<T>, value: any): Patch<T> {
        this.operations.push({ op: 'test', path: resolvePath(path), value: value });
        return this;
    }
}

function resolvePath<T>(path: Path<T>) {
    if (typeof path === 'string') {
        return path;
    }
    else if (path instanceof Function) {
        return path(typedPath<T>()).path();
    }
    else {
        return path.path();
    }
}