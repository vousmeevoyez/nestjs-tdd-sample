import * as assertions from './jest.assertions';

// extend default assertions using our custom assertions
expect.extend({ ...assertions });
