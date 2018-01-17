import { diff } from './diff';
import { expect } from 'chai';

describe('diff', () => {
    it('should create one add operation', () => {
        const from = [1, 2];
        const to = [1, 2, 3];

        const result: any[] = diff(from, to);

        expect(result).has.length(1);
        expect(result[0].op).to.equal('add');
        expect(result[0].path).to.equal('/2');
        expect(result[0].value).to.equal(3);
    });

    it('should create one add operation with a base path', () => {
        const from = [1, 2];
        const to = [1, 2, 3];

        const result: any[] = diff(from, to, '/ids');

        expect(result).has.length(1);
        expect(result[0].op).to.equal('add');
        expect(result[0].path).to.equal('/ids/2');
        expect(result[0].value).to.equal(3);
    });

    it('should create one remove operation', () => {
        const from = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const to = [1, 2, 3, 4, 6, 7, 8, 9, 10];

        const result: any[] = diff(from, to);

        expect(result).has.length(1);
        expect(result[0].op).to.equal('remove');
        expect(result[0].path).to.equal('/4');
    });
});