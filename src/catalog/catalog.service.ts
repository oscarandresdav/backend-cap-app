import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Catalog } from './entities/catalog.entity';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,
  ) {}
  findAll() {
    return this.catalogRepository.find();
  }

  async findOne(id: string) {
    const product = await this.catalogRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto) {
    const product = this.catalogRepository.create(createProductDto);
    return this.catalogRepository.save(product);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.catalogRepository.preload({
      id: +id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return this.catalogRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.catalogRepository.remove(product);
  }
}
