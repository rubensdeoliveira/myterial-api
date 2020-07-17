import { getRepository, Repository } from 'typeorm'

import IMaterialsRepository from '@modules/materials/repositories/IMaterialsRepository'

import ICreateMaterialDTO from '@modules/materials/dtos/ICreateMaterialDTO'
import IFindUserMaterialDTO from '@modules/materials/dtos/IFindUserMaterialDTO'

import Material from '../entities/Material'

class MaterialsRepository implements IMaterialsRepository {
  private ormRepository: Repository<Material>

  constructor() {
    this.ormRepository = getRepository(Material)
  }

  public async findUserMaterial(
    data: IFindUserMaterialDTO,
  ): Promise<Material | undefined> {
    const material = this.ormRepository.findOne({
      where: { user_id: data.user_id, id: data.material_id },
    })

    return material
  }

  public async findUserMaterials(user_id: string): Promise<Material[]> {
    const materials = this.ormRepository.find({ where: { user_id } })

    return materials
  }

  public async create(materialData: ICreateMaterialDTO): Promise<Material> {
    const material = this.ormRepository.create(materialData)

    await this.ormRepository.save(material)

    return material
  }

  public async save(material: Material): Promise<Material> {
    return this.ormRepository.save(material)
  }
}

export default MaterialsRepository
