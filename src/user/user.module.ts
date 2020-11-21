import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './resolver/user.resolver';
import { User, UserSchema } from './model/user.model';
import { UserService } from './service/user.service';

export const userMm = MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema,
  },
]);

@Module({
  imports: [userMm],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
