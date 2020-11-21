import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(phoneNo: string, password: string): Promise<any | null> {
    const user = await this.usersService.findByPhoneNo(phoneNo);
    if (user && user.checkPassword(password)) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
