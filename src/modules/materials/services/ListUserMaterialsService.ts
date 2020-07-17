import { injectable, inject } from 'tsyringe'

import Material from '../infra/typeorm/entities/Material'
import IMaterialsRepository from '../repositories/IMaterialsRepository'

interface IRequest {
  user_id: string
}

@injectable()
class ListUserMaterialsService {
  constructor(
    @inject('MaterialsRepository')
    private materialsRepository: IMaterialsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Material[]> {
    const materials = await this.materialsRepository.findUserMaterials(user_id)

    return materials
  }
}

export default ListUserMaterialsService
