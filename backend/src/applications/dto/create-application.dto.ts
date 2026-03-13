import { IsEmail, IsInt, IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  fullName!: string;

  @IsEmail()
  email!: string;

  @IsInt()
  amount!: number;

  @IsString()
  project!: string;
}
