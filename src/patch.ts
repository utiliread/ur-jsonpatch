import { TypedPathBuilder, typedPath } from './typed-path';

import { Operation } from 'fast-json-patch';

export type Path<TDocument, TDestination> = ((x: TypedPathBuilder<TDocument>) => BuiltPath<TDestination>) | string;

export interface BuiltPath<TDestination> {
    path: () => string;
}

export class Patch<TDocument> {
    operations: Operation[] = [];

    add<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument> {
        this.operations.push({ op: 'add', path: resolvePath(path), value: value });
        return this;
    }

    push<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument> {
        this.operations.push({ op: 'add', path: resolvePath(path) + '/-', value: value });
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

function resolvePath<TDocument, TDestination>(path: Path<TDocument, TDestination>) {
    if (typeof path === 'string') {
        return path;
    }

    let builtPath = path(typedPath<TDocument>());
    return builtPath.path();
}