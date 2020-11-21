import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
