import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserResolver } from './resolver/user.resolver';
import { UserSchema } from './model/user.model';
import { UserService } from './service/user.service';

export const userDdm = DynamooseModule.forFeature([
  {
    name: 'user',
    schema: UserSchema,
  },
]);

@Module({
  imports: [userDdm],
  providers: [UserService, UserResolver],
})
export class UserModule {}
