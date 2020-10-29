import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateUserDto } from '../dto/user.dto';
import { UserStatus } from '../model/user.enum';
import { User, UserKey } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user')
    private readonly model: Model<User, UserKey>,
  ) {}

  findById(key: UserKey) {
    return this.model.get(key);
  }

  create(input: CreateUserDto) {
    return this.model.create({
      ...input,
      id: uuid.v4(),
      status: UserStatus.WAITING_VERIFICATION,
    });
  }
}
