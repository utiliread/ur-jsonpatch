import { AddOperation } from './add-operation';
import { CopyOperation } from './copy-operation';
import { MoveOperation } from './move-operation';
import { RemoveOperation } from './remove-operation';
import { ReplaceOperation } from './replace-operation';
import { TestOperation } from './test-operation';

export declare type Operation =
    AddOperation<any> |
    RemoveOperation |
    ReplaceOperation<any> |
    CopyOperation |
    MoveOperation |
    TestOperation<any>;