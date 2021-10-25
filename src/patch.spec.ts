import { Patch } from './patch';
import { expect } from 'chai';
import { typedPath } from './typed-path';

interface Document {
    string: string;
    array: number[];
}

describe('patch', () => {
    it('should replace value when using string path', () => {
        const patch = new Patch<Document>();
        
        patch.replace('/string', 'new value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('replace');
        expect(operations[0].path).to.equal('/string');
        expect(operations[0].value).to.equal('new value');
    });

    it('should replace value when using path builder', () => {
        const patch = new Patch<Document>();
        
        patch.replace(x => x.string, 'new value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('replace');
        expect(operations[0].path).to.equal('/string');
        expect(operations[0].value).to.equal('new value');
    });

    it('should replace value when using built path', () => {
        const patch = new Patch<Document>();
        
        patch.replace(typedPath<Document>().string, 'new value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('replace');
        expect(operations[0].path).to.equal('/string');
        expect(operations[0].value).to.equal('new value');
    });

    it('should include the array index in the path', () => {
        const patch = new Patch<Document>();
        
        patch.replace(x => x.array[2], 'new value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('replace');
        expect(operations[0].path).to.equal('/array/2');
        expect(operations[0].value).to.equal('new value');
    });

    it('should add or update if not array', () => {
        const patch = new Patch<Document>();
        
        patch.add(x => x.string, 'new string value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('add');
        expect(operations[0].path).to.equal('/string');
        expect(operations[0].value).to.equal('new string value');
    });

    it('should insert if an index is specified', () => {
        const patch = new Patch<Document>();
        
        patch.add(x => x.array[1], 'new value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('add');
        expect(operations[0].path).to.equal('/array/1');
        expect(operations[0].value).to.equal('new value');
    });

    it('should append if array and no index is specified', () => {
        const patch = new Patch<Document>();
        
        patch.addEnd(x => x.array, 'new value');

        const operations: any[] = patch.operations;

        expect(operations).has.length(1);
        expect(operations[0].op).to.equal('add');
        expect(operations[0].path).to.equal('/array/-');
        expect(operations[0].value).to.equal('new value');
    });
});