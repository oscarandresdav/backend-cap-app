import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  detail: string;

  @Column()
  stock: number;

  @Column({ default: 0 })
  minimum_stock_level: number;

  @Column({ type: 'decimal', precision: 12, scale: 4 })
  cost: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @VersionColumn({ nullable: true })
  revision: number;
}
