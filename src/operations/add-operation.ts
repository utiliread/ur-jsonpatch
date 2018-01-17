export interface AddOperation<T> {
    op: 'add';
    path: string;
    value: T;
}