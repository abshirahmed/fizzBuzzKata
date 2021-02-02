import { expect } from 'chai';

// TODO: given a parameter value, the function should return the value as a string ✅
// TODO: given a parameter value, the function should check to see value is between 1 and 100 🔴
// TODO: given a parameter value which is a multiple of 3, the function should return "Fizz"
// TODO: given a parameter value which is a multiple of 5, the function should return "Buzz"
// TODO: given a parameter value which is a multiple of 3 and 5, the function should return "FizzBuzz"

function fizzBuzzCompute(value: number) {
    if (value < 1) {
        throw new Error('value is below 1');
    }
    return value.toString();
}

describe('FizzBuzz kata', () => {
    it('if the function returns a number, it should be of type string', () => {
        expect(fizzBuzzCompute(69)).to.be.a('string');
    });
    it('given a number, the function should fail if the number is below 1', () => {
        expect(() => fizzBuzzCompute(0)).to.throw();
    });
    it.skip('given a number, the function should fail if the number is greater than 100', () => {

    });
});
