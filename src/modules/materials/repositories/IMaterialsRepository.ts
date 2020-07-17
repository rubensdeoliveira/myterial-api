import Material from '../infra/typeorm/entities/Material'
import ICreateMaterialDTO from '../dtos/ICreateMaterialDTO'
import IFindUserMaterialDTO from '../dtos/IFindUserMaterialDTO'

export default interface IMaterialsRepository {
  findUserMaterial(data: IFindUserMaterialDTO): Promise<Material | undefined>
  findUserMaterials(user_id: string): Promise<Material[]>
  create(data: ICreateMaterialDTO): Promise<Material>
  save(material: Material): Promise<Material>
}
