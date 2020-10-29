import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserModule } from './user/user.module';

export const config = ConfigModule.forRoot();
export const gqlModule = GraphQLModule.forRoot({
  autoSchemaFile: true,
  playground: {
    endpoint: '/graphql',
  },
});
export const ddm = DynamooseModule.forRoot({
  local: process.env.IS_DDB_LOCAL === 'true',
  aws: {
    accessKeyId: process.env.AWS_DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_DYNAMO_SECRET_ACCESS_KEY,
    region: process.env.REGION,
  },
  model: {
    create: false,
    prefix: `${process.env.SERVICE}-${process.env.STAGE}-`,
    suffix: '-table',
  },
});

@Module({
  imports: [config, gqlModule, ddm, UserModule],
})
export class AppModule {}
