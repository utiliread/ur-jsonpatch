import { compare } from 'fast-json-patch';
export function diff(tree1, tree2) {
    return compare(tree1, tree2);
}
