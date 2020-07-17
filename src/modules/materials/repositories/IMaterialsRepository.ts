import Material from '../infra/typeorm/entities/Material'
import ICreateUserDTO from '../dtos/ICreateMaterialDTO'

export default interface IMaterialsRepository {
  findUserMaterials(user_id: string): Promise<Material[]>
  create(data: ICreateUserDTO): Promise<Material>
  save(material: Material): Promise<Material>
}
