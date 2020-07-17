import Material from '../infra/typeorm/entities/Material'
import ICreateUserDTO from '../dtos/ICreateMaterialDTO'

export default interface IMaterialsRepository {
  create(data: ICreateUserDTO): Promise<Material>
  save(material: Material): Promise<Material>
}
