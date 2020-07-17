import { injectable, inject } from 'tsyringe'

import IMaterialsRepository from '../repositories/IMaterialsRepository'

import Material from '../infra/typeorm/entities/Material'

interface IRequest {
  code: string
  name: string
  description: string
  manufacturer: string
  amount: number
  unity: string
  price: number
  note: string
  photo: string
  user_id: string
}

@injectable()
class CreateMaterialService {
  constructor(
    @inject('MaterialsRepository')
    private materialsRepository: IMaterialsRepository,
  ) {}

  public async execute({
    code,
    name,
    description,
    manufacturer,
    amount,
    unity,
    price,
    note,
    photo,
    user_id,
  }: IRequest): Promise<Material> {
    const material = await this.materialsRepository.create({
      code,
      name,
      description,
      manufacturer,
      amount,
      unity,
      price,
      note,
      photo,
      user_id,
    })

    return material
  }
}

export default CreateMaterialService
