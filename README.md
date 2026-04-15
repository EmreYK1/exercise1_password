# @emreyk1/password-utilities

A small, useful JavaScript library that provides password utility functions. This library helps you generate passwords and check their strength.

## Installation

You can install the package via npm:

```bash
npm install @emreyk1/password-utilities
```

Or via yarn:

```bash
yarn add @emreyk1/password-utilities
```

## Usage

### `generateStrongPassword(length)`

Generates a random password of the specified length. The function guarantees that the returned password meets all "strong" criteria by internally validating it against `isStrongPassword`.

```javascript
const { generateStrongPassword } = require('@emreyk1/password-utilities');

// Generate a password with default length (12)
const password = generateStrongPassword();
console.log(password); // Example: "pC%mD8TpCKn2"

// Generate a password with a specific length
const shortPassword = generateStrongPassword(8);
console.log(shortPassword); // Example: "aB3!dE5f"
```

### `isStrongPassword(password)`

Checks if a password meets the strength criteria:
- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character (`!@#$%^&*()_+`)

```javascript
const { isStrongPassword } = require('@emreyk1/password-utilities');

console.log(isStrongPassword("Hello World")); // false
console.log(isStrongPassword("pC%mD8TpCKn2")); // true
```

## Features

- Lightweight and easy to use.
- Zero dependencies.
- Written in plain JavaScript.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
