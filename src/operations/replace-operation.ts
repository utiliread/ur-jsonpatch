export interface ReplaceOperation<T = any> {
  op: "replace";
  path: string;
  value: T;
}
