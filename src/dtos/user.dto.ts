import { IsString, IsNotEmpty, IsDefined, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsNotEmpty({ message: 'Id should not be empty/null' })
    id: number

    @IsNotEmpty({ message: 'Name should not be empty/null' })
    @IsString()
    name: string

    @IsEmail({}, { message: 'Please enter valid email address' })
    @IsNotEmpty({ message: 'Email should not be empty/null' })
    email: string

    @IsString()
    @IsNotEmpty({ message: 'Address should not be empty/null' })
    address: string

}
