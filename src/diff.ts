import { Operation } from './operations';
import { diff as jiffDiff } from 'jiff';

export function diff(from: any, to: any, basePath?: string): Operation[] {
    let operations = jiffDiff(from, to, {
        invertible: false // Do not include test operations at the moment
    });

    if (basePath && basePath.endsWith('/')) {
        basePath = basePath.substr(0, basePath.length - 1);
    }

    for (let operation of operations) {
        if (basePath) {
            operation.path = basePath + operation.path;

            if (operation.from) {
                operation.from = basePath + operation.from;
            }
        }
        delete operation.context;
    }

    return operations;
}