import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from '@/user/resolver/user.resolver';
import { UserService } from '@/user/service/user.service';
import { userDdm } from '@/user/user.module';
import { ddm } from '../../utils';

let resolver: UserResolver;

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [ddm, userDdm],
    providers: [UserResolver, UserService],
  }).compile();

  resolver = module.get<UserResolver>(UserResolver);
});

describe('UserResolver', () => {
  beforeAll(async () => {
    expect(resolver).toBeDefined();
  });

  test('should resolve create User correctly', async () => {
    const parameters = {
      firstName: 'Kelvin',
      lastName: 'Desman',
      email: 'kelvin@sample.com',
      phoneExt: '62',
      phoneNo: '81231344',
      password: 'password',
    };
    const result = await resolver.createUser(parameters);
    expect(result).toContainAllKeys([
      'firstName',
      'lastName',
      'email',
      'phoneExt',
      'phoneNo',
      'password',
      'id',
      'status',
      'createdAt',
      'updatedAt',
    ]);
  });
});
