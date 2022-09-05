import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 60 })
  name: string;

  @Column('int')
  parent_category: number;
}
