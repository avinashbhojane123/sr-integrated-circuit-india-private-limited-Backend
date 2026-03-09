import { IsEmail, IsNotEmpty, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateStudentDto {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @Type(() => Number)
  @IsInt()
  age: number;
}