import { TypedPathBuilder } from './typed-path';
import { Operation } from 'fast-json-patch';
export declare type Path<TDocument, TDestination> = ((x: TypedPathBuilder<TDocument>) => BuiltPath<TDestination>) | string;
export interface BuiltPath<TDestination> {
    path: () => string;
}
export declare class Patch<TDocument> {
    operations: Operation[];
    add<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument>;
    push<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument>;
    remove<TDestination>(path: Path<TDocument, TDestination>): Patch<TDocument>;
    replace<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument>;
    copy<TDestination>(from: Path<TDocument, TDestination>, path: Path<TDocument, TDestination>): Patch<TDocument>;
    move<TDestination>(from: Path<TDocument, TDestination>, path: Path<TDocument, TDestination>): Patch<TDocument>;
    test<TDestination>(path: Path<TDocument, TDestination>, value: any): Patch<TDocument>;
}
