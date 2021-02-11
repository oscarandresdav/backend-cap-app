import { Injectable } from '@nestjs/common';
import { Catalog } from './entities/catalog.entity';

@Injectable()
export class CatalogService {
  private catalog: Catalog[] = [
    {
      id: 1,
      name: 'Gorra plana',
      price: 5,
      quantity: 200,
    },
  ];

  findAll() {
    return this.catalog;
  }

  findOne(id: string) {
    return this.catalog.find(item => item.id === +id);
  }

  create(createCatalogDto: any) {
    this.catalog.push(createCatalogDto);
  }

  update(id: string, updateCatalogDto: any) {
    const existingCatalog = this.findOne(id);
    if (existingCatalog) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const CatalogIndex = this.catalog.findIndex(item => item.id === +id);
    if (CatalogIndex >= 0) {
      this.catalog.splice(CatalogIndex, 1);
    }
  }
}
