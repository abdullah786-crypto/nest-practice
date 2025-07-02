import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';
@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  findAllUsers () {
    return this.appService.getAllUsers()
  }

  // @Get(':id')
  // getUsersData(@Param('id') id: number) {
  //   let userId = Number(id)
  //   console.log('The user id is', userId);
  //   return this.appService.getUserDetails(userId)
  // }

  @Post('/addUser')
  addUserData(@Body() userDto: CreateUserDto) {
    console.log('user data is', userDto);
    this.appService.addUser(userDto)
    return {
      message: 'Data added successfully',
      data: userDto,
      listUsers: this.appService.users  
    }
  }

  @Delete('/delete/id=:id')
  deletUserById(@Param() param) {
    // return this.appService.deleteUser(user.id)
    if (param.id) {
      let userId = Number(param.id)
     let deletedUser = this.appService.deleteUser(userId)
      return {
        message: 'User deleted successfully',
        data: deletedUser,
      }
    } else {
      return {
        message: 'Failed to delete user'
      }
    }
  }

  @Put('/update/id=:id')
  updateUser(@Body() userDto: CreateUserDto, @Param() params) {
    let userId = Number(params.id)

    let updatedUser = this.appService.updateUsr(userId, userDto)
    return {
      message: 'User updated successfully',
      user: updatedUser
    }
  }

}
