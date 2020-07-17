import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateMaterialService from '@modules/materials/services/CreateMaterialService'

export default class MaterialsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      code,
      name,
      description,
      manufacturer,
      amount,
      unity,
      price,
      note,
      photo,
    } = request.body

    const user_id = request.user.id

    const createMaterial = container.resolve(CreateMaterialService)

    const material = await createMaterial.execute({
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

    return response.json(classToClass(material))
  }
}
