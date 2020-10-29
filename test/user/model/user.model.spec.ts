import * as dynamoose from 'dynamoose';
import { UserSchema } from '@/user/model/user.model';
import { UserStatus } from '@/user/model/user.enum';

describe('user.model', () => {
  test('make UserSchema is correct', async () => {
    const UserModel = dynamoose.model('user', UserSchema);
    const parameters = {
      id: 'my-uuid',
      firstName: 'Kelvin',
      middleName: 'D',
      lastName: 'Desman',
      email: 'kelvin@sample.com',
      phoneExt: '62',
      phoneNo: '812312313',
      password: 'password',
      status: UserStatus.WAITING_VERIFICATION,
    };
    const result = await UserModel.create(parameters);
    expect(result).toContainAllKeys([
      'id',
      'firstName',
      'middleName',
      'lastName',
      'email',
      'phoneExt',
      'phoneNo',
      'password',
      'status',
      'createdAt',
      'updatedAt',
    ]);
  });
});
