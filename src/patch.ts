import { Path, TypedPathBuilder, resolvePath } from './typed-path';

import { Operation } from './operations';

export class Patch<TDocument> {
    operations: Operation[] = [];

    add<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument> {
        let resolvedPath = resolvePath(path);
        if (!/^.*[0-9]$/.test(resolvedPath)) {
            resolvedPath += "/-"; // Append
        }
        this.operations.push({ op: 'add', path: resolvedPath, value: value });
        return this;
    }

    remove<TDestination>(path: Path<TDocument, TDestination>): Patch<TDocument> {
        this.operations.push({ op: 'remove', path: resolvePath(path) });
        return this;
    }

    replace<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument> {
        this.operations.push({ op: 'replace', path: resolvePath(path), value: value });
        return this;
    }

    copy<TDestination>(from: Path<TDocument, TDestination>, path: Path<TDocument, TDestination>): Patch<TDocument> {
        this.operations.push({ op: 'copy', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }

    move<TDestination>(from: Path<TDocument, TDestination>, path: Path<TDocument, TDestination>): Patch<TDocument> {
        this.operations.push({ op: 'move', from: resolvePath(from), path: resolvePath(path) });
        return this;
    }

    test<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument> {
        this.operations.push({ op: 'test', path: resolvePath(path), value: value });
        return this;
    }
}