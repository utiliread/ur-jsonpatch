import { Path } from "./typed-path";
import { Operation } from "./operations";
export declare class Patch<TDocument> {
    operations: Operation[];
    add<TDestination>(path: Path<TDocument, TDestination>, value: TDestination): Patch<TDocument>;
    addEnd<TDestination>(path: Path<TDocument, TDestination>, value: TDestination): Patch<TDocument>;
    remove<TDestination>(path: Path<TDocument, TDestination>): Patch<TDocument>;
    replace<TDestination>(path: Path<TDocument, TDestination>, value: TDestination): Patch<TDocument>;
    copy<TDestination>(from: Path<TDocument, TDestination>, path: Path<TDocument, TDestination>): Patch<TDocument>;
    move<TDestination>(from: Path<TDocument, TDestination>, path: Path<TDocument, TDestination>): Patch<TDocument>;
    test<TDestination>(path: Path<TDocument, TDestination>, value: TDestination): Patch<TDocument>;
}
