export interface TestOperation<T> {
    op: 'test';
    path: string;
    value: T;
}
