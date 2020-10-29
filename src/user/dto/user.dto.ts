import { Field, InputType, ID, ObjectType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  MaxLength,
  IsEmail,
  Length,
  IsNumberString,
} from 'class-validator';
import { User } from '../interfaces/user.interface';
import { UserStatus } from '../model/user.enum';

@InputType()
export class CreateUserDto implements User {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Field()
  firstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @Field({ nullable: true })
  middleName?: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Field()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsNumberString()
  @Field()
  @Length(2, 3)
  phoneExt: string;

  @IsNotEmpty()
  @IsNumberString()
  @Field()
  @Length(8, 13)
  phoneNo: string;

  @IsNotEmpty()
  @IsString()
  @Length(6)
  @Field()
  password: string;
}

@ObjectType()
export class UserDto extends CreateUserDto {
  @Field(/* istanbul ignore next */ () => ID)
  id: string;

  @Field(/* istanbul ignore next */ () => UserStatus)
  status: UserStatus;

  @Field()
  createAt: string;

  @Field()
  updatedAt: string;
}
