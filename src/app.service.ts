import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  updatedUser: any
  users: CreateUserDto[] = []

  getAllUsers() {
    return {
      message: 'All users fetched successfully',
      users: this.users
    }
  }

  // getUserDetails(id: any): any {
  //   switch (id) {
  //     case 1:
  //       return this.users
  //     case 2:
  //       return this.users
  //     case 3:
  //       return this.user3Data
  //     default:
  //       return { message: 'Default user is not found' }
  //   }
  // }

  addUser(data: any) {
    // console.log('User data is', data);
    console.log('Type of data is', typeof data);
    this.users = [...this.users, data]
    console.log('User data is', this.users);

    return this.users
  }

  deleteUser(id: number) {
    let user = this.users.find((usr) => usr.id === id)
    this.users = this.users.filter((usr) => usr.id !== id)

    if(user)
    {
      return this.users
    }
    else {
      return {
        message: 'Invalid user id. No any user found'
      }
    }
  }

  updateUsr(id: number, data: any) {
    console.log('Type of the id is', typeof id);
    let userExist = this.users.find((usr) => usr.id === id)
    if (userExist) {
      console.log(
        'user exist', userExist
      );
      this.updatedUser = this.users.filter((usr) => usr.id !== id)
      console.log('uodate user ', this.updatedUser);
      console.log('Body is', data);

      this.updatedUser = [...this.updatedUser, data]
      console.log('uodate user ', this.updatedUser);

      return this.updatedUser

    } else {
      return {
        message: 'User not exist',
      }
    }

  }

}
