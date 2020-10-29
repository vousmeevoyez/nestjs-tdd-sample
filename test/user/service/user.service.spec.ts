import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '@/user/service/user.service';
import { userDdm } from '@/user/user.module';
import { ddm } from '../../utils';

let service: UserService;

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [ddm, userDdm],
    providers: [UserService],
  }).compile();

  service = module.get<UserService>(UserService);
});

describe('UserService', () => {
  beforeAll(async () => {
    expect(service).toBeDefined();
  });

  test('should create User correctly', async () => {
    const parameters = {
      firstName: 'Kelvin',
      lastName: 'Desman',
      email: 'kelvin@sample.com',
      phoneExt: '62',
      phoneNo: '81231344',
      password: 'password',
    };
    const result = await service.create(parameters);
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
