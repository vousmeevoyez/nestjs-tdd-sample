import { Model, model } from 'mongoose';
import { UserSchema, UserDocument } from '@/user/model/user.model';
import { setupDatabase } from '../../test-utils';

setupDatabase();

describe('user.model', () => {
  const userModel = model<UserDocument, Model<UserDocument>>(
    'User',
    UserSchema,
  );
  test('make UserSchema is correct', async () => {
    const parameters = {
      id: 'my-uuid',
      firstName: 'Kelvin',
      lastName: 'Desman',
      email: 'kelvin@sample.com',
      phoneExt: '62',
      phoneNo: '812312313',
      password: 'password',
    };
    const result = await userModel.create(parameters);
    //@ts-ignore
    expect(result).toHaveUserProperties();
  });
});
