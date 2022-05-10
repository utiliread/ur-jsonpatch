export interface AddOperation<T = any> {
  op: "add";
  path: string;
  value: T;
}
