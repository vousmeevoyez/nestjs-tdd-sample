import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/user.dto';
import { User as UserModel, UserDocument } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(payload: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(payload);
    await user.generateHashPassword();
    return user.save();
  }

  async findByPhoneNo(phoneNo: string): Promise<UserDocument | null> {
    return this.userModel
      .findOne({
        phoneNo,
      })
      .exec();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }
}
