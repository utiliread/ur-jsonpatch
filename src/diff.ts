import { Operation, compare } from 'fast-json-patch';

export function diff(tree1: any, tree2: any): Operation[] {
    return compare(tree1, tree2);
}