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

export function toContainObject(received, argument) {
  const pass = this.equals(
    received,
    expect.arrayContaining([expect.objectContaining(argument)]),
  );
  return isPassOrFailed(pass);
}
