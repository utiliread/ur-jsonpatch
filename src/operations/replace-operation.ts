export interface ReplaceOperation<T> {
    op: 'replace';
    path: string;
    value: T;
}