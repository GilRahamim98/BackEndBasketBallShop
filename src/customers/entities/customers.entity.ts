import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30 })
  first_name: string;

  @Column('varchar', { length: 30 })
  last_name: string;

  @Column('datetime')
  birth_day: string;

  @Column('varchar', { length: 30, unique: true })
  user_name: string;

  @Column('varchar', { length: 30, unique: true })
  email: string;

  @Column('varchar', { length: 30 })
  phone: string;

  @Column('varchar', { length: 20 })
  street: string;

  @Column('varchar', { length: 20 })
  city: string;

  @Column('datetime')
  register_date: string;

  @Column('char', { length: 64 })
  password: string;
}
