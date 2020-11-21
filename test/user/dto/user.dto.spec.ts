import { validate } from 'class-validator';
import { CreateUserDto } from '@/user/dto/user.dto';

const cases = [
  [
    {
      firstName: 'Kelvin',
      middleName: '',
      lastName: 'Desman',
      email: 'kelvin@sample.com',
      phoneExt: '62',
      phoneNo: '81231233',
      password: 'coolpassword',
    },
    0, // should be no error because all fields is provided
  ],
  [
    {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneExt: '',
      phoneNo: '',
      password: '',
    },
    6, // should be 6 error (because middleName is optional)
  ],
];

describe('CreateUserDto', () => {
  let dto: CreateUserDto;

  beforeEach(() => {
    dto = new CreateUserDto();
  });

  test.each(cases)(
    'given %p as as arguments, expect to returns %p errors',
    (parameters, expectedResult) => {
      const mapParamsToDto = (parameters: CreateUserDto) => {
        for (const [key, value] of Object.entries(parameters)) {
          const property = key as keyof CreateUserDto;
          dto[property] = value;
        }
      };

      // @ts-ignore
      mapParamsToDto(parameters);

      validate(dto).then((errors) => {
        expect(errors.length).toBe(expectedResult);
      });
    },
  );
});
