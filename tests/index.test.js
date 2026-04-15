const { generateStrongPassword, isStrongPassword } = require('../src/index');

describe('Step 4: Password Utilities initial tests', () => {
  test('generateStrongPassword should return a string of the correct length', () => {
    const length = 10;
    const result = generateStrongPassword(length);
    expect(result).toHaveLength(length);
    expect(typeof result).toBe('string');
  });

  test('isStrongPassword should identify a weak password', () => {
    expect(isStrongPassword('weak')).toBe(false);
  });

  test('isStrongPassword should identify a potentially strong password', () => {
    // Note: The flawed generator might not always produce a strong password,
    // but the checker should still work.
    expect(isStrongPassword('pC%mD8TpCKn2')).toBe(true);
  });
});
