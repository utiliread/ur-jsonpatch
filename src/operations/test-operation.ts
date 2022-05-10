export interface TestOperation<T = any> {
  op: "test";
  path: string;
  value: T;
}
