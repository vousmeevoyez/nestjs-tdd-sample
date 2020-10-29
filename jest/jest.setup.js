import * as dynamoose from 'dynamoose';
import { ddb } from '../test/utils';
import * as assertions from './jest.assertions';

// extend default assertions using our custom assertions
expect.extend({ ...assertions });

// setup dynamoose locally for all test
global.beforeAll(() => {
  dynamoose.aws.ddb.set(ddb);
});
