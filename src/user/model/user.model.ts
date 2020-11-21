/*
 *   SCHEMA FOR MONGOOSE
 * */
import bcrypt from 'bcryptjs';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserStatus } from './user.enum';
import { IUser } from '../interfaces/user.interface';

const userStatus = Object.values(UserStatus);

@Schema({ timestamps: true })
export class User implements Partial<IUser> {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: false })
  middleName?: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phoneExt: string;

  @Prop({ required: true, unique: true })
  phoneNo: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: false,
    enum: userStatus,
    default: userStatus[0],
  })
  status?: string;
}

export interface UserDocument extends IUser, Document {}

export const UserSchema = SchemaFactory.createForClass(User);
// Instance Methods
UserSchema.methods.generateHashPassword = async function (): Promise<string> {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  return hashedPassword;
};
UserSchema.methods.checkPassword = async function (
  password: string,
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};
