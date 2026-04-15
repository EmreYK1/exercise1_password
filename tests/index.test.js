const { generateStrongPassword, isStrongPassword } = require('../src/index');

describe('Password Utilities Unit Tests', () => {
  describe('isStrongPassword', () => {
    test('should return true for a strong password', () => {
      expect(isStrongPassword('pC%mD8TpCKn2')).toBe(true);
    });

    test('should return false for a short password', () => {
      expect(isStrongPassword('weak')).toBe(false);
    });

    test('should return false for "Hello World"', () => {
      expect(isStrongPassword('Hello World')).toBe(false);
    });
  });

  describe('generateStrongPassword', () => {
    test('should return a string of the correct length', () => {
      const length = 10;
      const result = generateStrongPassword(length);
      expect(result).toHaveLength(length);
    });

    test('should guaranteed return a strong password (verified 100 times)', () => {
      for (let i = 0; i < 100; i++) {
        const password = generateStrongPassword(12);
        expect(isStrongPassword(password)).toBe(true);
      }
    });
  });
});
