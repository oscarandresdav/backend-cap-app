import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  readonly quantity: number;
  readonly price: number;
}
