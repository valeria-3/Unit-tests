import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isNumberEven tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });
  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('s');
    }).to.throw(`[s] is not of type "Number" it is of type "string"`);
  });
});
