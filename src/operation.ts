export interface AddOperation
{
    op: 'add';
    path: string;
    value: any;
}

export interface RemoveOperation
{
    op: 'remove';
    path: string;
}

export interface ReplaceOperation
{
    op: 'replace';
    path: string;
    value: any;
}

export interface CopyOperation
{
    op: 'copy';
    from: string;
    path: string;
}

export interface MoveOperation
{
    op: 'move';
    from: string;
    path: string;
}

export interface TestOperation
{
    op: 'test';
    path: string;
    value: string;
}

export type Operation =
    AddOperation |
    RemoveOperation |
    ReplaceOperation |
    CopyOperation |
    MoveOperation |
    TestOperation