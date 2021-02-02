import { expect } from 'chai';


function fizzBuzzCompute(value: number) {
    return true;
}

describe('FizzBuzz kata', () => {
    it('if the function return a number, it should be of type string', () => {
        expect(fizzBuzzCompute(69)).to.be.a('string');
    });
});
