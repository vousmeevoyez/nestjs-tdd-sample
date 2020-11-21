import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { CreateUserDto, UserDto } from '../dto/user.dto';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserDto)
  createUser(@Args('parameters') parameters: CreateUserDto) {
    return this.userService.create(parameters);
  }

  @Query(() => UserDto, { name: 'user' })
  getUsers() {
    return this.userService.findAll();
  }
}
