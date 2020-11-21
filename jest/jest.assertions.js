const isPassOrFailed = (pass) => {
  if (pass) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          received,
        )} not to contain object ${this.utils.printExpected(argument)}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          received,
        )} to contain object ${this.utils.printExpected(argument)}`,
      pass: false,
    };
  }
};

export function toHaveUserProperties(received, argument) {
  const pass = this.equals(
    expect(received).toHaveProperty('firstName'),
    expect(received).toHaveProperty('lastName'),
    expect(received).toHaveProperty('email'),
    expect(received).toHaveProperty('phoneExt'),
    expect(received).toHaveProperty('phoneNo'),
    expect(received).toHaveProperty('password'),
    expect(received).toHaveProperty('status'),
  );
  return isPassOrFailed(pass);
}
