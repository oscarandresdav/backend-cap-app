import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly detail: string;

  readonly quantity: number;
  readonly stock: number;
  readonly minimum_stock_level: number;
  readonly cost: number;
  readonly price: number;
}
