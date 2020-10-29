declare namespace jest {
  interface Matchers<R> {
    toHaveListOfProperties(argument: Array<string>): CustomMatcherResult;
  }
}
