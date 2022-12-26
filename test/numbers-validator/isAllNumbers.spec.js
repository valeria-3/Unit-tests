import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isAllNumbers test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided array that contains only numbers', () => {
    const validationResults = validator.isAllNumbers([4, 5, 6, 7, 8, 0.787767, 3421]);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false when provided array that contains not only numbers', () => {
    const validationResults = validator.isAllNumbers([1, 2, 's', 4]);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when not array is provided', () => {
    expect(() => {
      validator.isAllNumbers(5);
    }).to.throw(`[5] is not an array`);
  });
});
