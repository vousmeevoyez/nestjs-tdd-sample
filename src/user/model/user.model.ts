/*
 *   SCHEMA FOR DYNAMO DB!
 * */
import { Schema } from 'dynamoose';
import { UserStatus } from './user.enum';

export const UserSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneExt: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        UserStatus.WAITING_VERIFICATION,
        UserStatus.ACTIVE,
        UserStatus.DISABLED,
      ],
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: ['createdAt'],
      updatedAt: ['updatedAt'],
    },
  },
);
