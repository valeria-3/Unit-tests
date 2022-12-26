import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('getEvenNumbersFromArray test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return array of even numbers when provided array contains even numbers', () => {
    const validationResults1 = validator.getEvenNumbersFromArray([4, 5, 6, 7, 8]);
    expect(validationResults1).to.be.eql([4, 6, 8]);
  });

  it('should return empty array when provided array doesnt contain even numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray([1, 3, 5, 7]);
    expect(validationResults).to.be.eql([]);
  });

  it('should throw an error when provided array with non-numerical values', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1, 2, 's', 4]);
    }).to.throw(`[1,2,s,4] is not an array of "Numbers"`);
  });

  it('should throw an error when not array is provided', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(5);
    }).to.throw(`[5] is not an array of "Numbers"`);
  });
});
