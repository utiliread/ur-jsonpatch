import { BuiltPath } from './typed-path';
import { Operation } from './operations';
export declare function diff(from: any, to: any, basePath?: string | BuiltPath<any>): Operation[];
