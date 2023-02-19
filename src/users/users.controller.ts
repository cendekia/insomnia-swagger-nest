import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    description: 'Create a new user',
    summary: '/users [POST] Create a new user',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    description: 'Get all users',
    summary: '/users [GET] Get all users',
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get a user by id',
    summary: '/users/:id [GET] Get a user by id',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Update a user by id',
    summary: '/users/:id [PATCH] Update a user by id',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Delete a user by id',
    summary: '/users/:id [DELETE] Delete a user by id',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
