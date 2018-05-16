const expect = require('expect');
const {isRealString} = require('./validation');

describe('login validation', () => {
  it('should reject non-string values', () => {
    expect(isRealString(333)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString('abc')).toBeTruthy();
  });
});