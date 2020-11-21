import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

export const config = ConfigModule.forRoot();
export const gqlModule = GraphQLModule.forRoot({
  autoSchemaFile: true,
  playground: {
    endpoint: '/graphql',
  },
});
export const mongooseModule = MongooseModule.forRoot(process.env.MONGO_DB_URL);

const coreModules = [config, gqlModule, mongooseModule];
const appModules = [AuthModule, UserModule];

@Module({
  imports: [...coreModules, ...appModules],
})
export class AppModule {}
