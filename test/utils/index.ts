import * as dynamoose from 'dynamoose';
import { DynamooseModule } from 'nestjs-dynamoose';

/*
 * we only import this variables when we require dynamoose dependency specifif
 * */
export const ddb = new dynamoose.aws.sdk.DynamoDB({
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'local',
  endpoint: 'localhost:8001',
  sslEnabled: false,
});

/*
 * we import this for nest js related modules because of nestjs-dynamoose
 * */
export const ddm = DynamooseModule.forRoot({
  local: 'http://localhost:8001',
  aws: { region: 'local' },
});
