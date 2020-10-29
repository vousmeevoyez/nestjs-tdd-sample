import { INestApplication, Module } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { UserModule } from '@/user/user.module';
import { config, gqlModule } from '@/app.module';
import { ddm } from '../utils';

describe('User (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    @Module({ imports: [config, gqlModule, ddm, UserModule] })
    class AppUserModule {}

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppUserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Mutation.createUser', async () => {
    const mutation =
      'mutation{createUser(parameters: {firstName: "Kelvin", lastName: "Desman", email: "sample@test.com", phoneExt: "62", phoneNo: "8123123133", password: "password"}){id}}';

    const result = await request(app.getHttpServer()).post('/graphql').send({
      operationName: null,
      variables: {},
      query: mutation,
    });
    expect(result.status).toBe(200);
    expect(result.body.data.createUser).toHaveProperty('id');
  });
});
