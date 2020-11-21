import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from '@/user/resolver/user.resolver';
import { UserService } from '@/user/service/user.service';
import { userMm } from '@/user/user.module';
import { mongod, setupDatabase } from '../../test-utils';

let resolver: UserResolver;
beforeAll(async () => {
  const mongooseModule = MongooseModule.forRoot(await mongod.getUri());
  const module_: TestingModule = await Test.createTestingModule({
    imports: [mongooseModule, userMm],
    providers: [UserResolver, UserService],
  }).compile();
  resolver = module_.get<UserResolver>(UserResolver);
});

setupDatabase();

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
    // @ts-ignore
    expect(result).toHaveUserProperties();
  });
});
