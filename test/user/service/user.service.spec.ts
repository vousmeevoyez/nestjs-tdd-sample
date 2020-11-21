import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { userMm } from '@/user/user.module';
import { UserService } from '@/user/service/user.service';
import { mongod, setupDatabase } from '../../test-utils';

let service: UserService;
beforeAll(async () => {
  const mongooseModule = MongooseModule.forRoot(await mongod.getUri());
  const module_: TestingModule = await Test.createTestingModule({
    imports: [mongooseModule, userMm],
    providers: [UserService],
  }).compile();
  service = module_.get<UserService>(UserService);
});

setupDatabase();

describe('UserService', () => {
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
    //@ts-ignore
    expect(result).toHaveUserProperties();
  });
});
