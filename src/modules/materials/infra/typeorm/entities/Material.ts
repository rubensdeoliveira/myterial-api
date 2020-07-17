import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import { Expose } from 'class-transformer'
import User from '@modules/users/infra/typeorm/entities/User'

@Entity('materials')
class Material {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  code: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  manufacturer: string

  @Column('decimal')
  amount: number

  @Column()
  unity: string

  @Column('decimal')
  price: number

  @Column()
  note: string

  @Column()
  photo: string

  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Expose({ name: 'photo_url' })
  getAvatarUrl(): string | null {
    return this.photo ? `${process.env.APP_API_URL}/files/${this.photo}` : null
  }
}

export default Material
