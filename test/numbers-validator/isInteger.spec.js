import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isInteger tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided integer', () => {
    const validationResults = validator.isInteger(400007);
    expect(validationResults).to.be.equal(true);
  });
  it('should return false when provided not integer', () => {
    const validationResults = validator.isInteger(0.7656);
    expect(validationResults).to.be.equal(false);
  });
  it('should throw an error when not number is provided', () => {
    expect(() => {
      validator.isInteger('p');
    }).to.throw(`[p] is not a number`);
  });
});
