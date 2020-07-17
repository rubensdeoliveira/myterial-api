import { injectable, inject } from 'tsyringe'

import Material from '../infra/typeorm/entities/Material'
import IMaterialsRepository from '../repositories/IMaterialsRepository'

interface IRequest {
  user_id: string
  material_id: string
}

@injectable()
class ShowUserMaterialService {
  constructor(
    @inject('MaterialsRepository')
    private materialsRepository: IMaterialsRepository,
  ) {}

  public async execute({
    user_id,
    material_id,
  }: IRequest): Promise<Material | undefined> {
    const material = await this.materialsRepository.findUserMaterial({
      user_id,
      material_id,
    })

    return material
  }
}

export default ShowUserMaterialService
