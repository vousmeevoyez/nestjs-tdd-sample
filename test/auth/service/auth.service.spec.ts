import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '@/auth/service/auth.service';
import { UserService } from '@/user/service/user.service';

let authService: AuthService;
let userService: UserService;

beforeAll(async () => {
  const module_: TestingModule = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UserService,
        useValue: {
          findByPhoneNo: jest.fn(),
        },
      },
    ],
  }).compile();

  authService = module_.get<AuthService>(AuthService);
  userService = module_.get<UserService>(UserService);
});

describe('AuthService', () => {
  it('all used service should be defined', () => {
    expect(authService).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('successfully validateUser when findByPhoneNo return success', async () => {
    const mockUser = {
      firstName: 'Kelvin',
      lastName: 'D',
      checkPassword: jest.fn(() => true),
    };
    userService.findByPhoneNo = jest.fn().mockReturnValueOnce(mockUser);

    const result = await authService.validateUser('81219644314', 'password');
    expect(result).toMatchObject(mockUser);
  });

  it('failed validateUser and return null when ', async () => {
    const mockUser = {
      firstName: 'Kelvin',
      lastName: 'D',
      checkPassword: jest.fn(() => false),
    };
    userService.findByPhoneNo = jest.fn().mockReturnValueOnce(mockUser);

    const result = await authService.validateUser('81219644314', 'password');
    expect(result).toBeNull();
  });
});
