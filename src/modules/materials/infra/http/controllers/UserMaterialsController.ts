import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListUserMaterialsService from '@modules/materials/services/ListUserMaterialsService'
import ShowUserMaterialService from '@modules/materials/services/ShowUserMaterialService'

export default class UserMaterialsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { id } = request.params

    const showUserMaterial = container.resolve(ShowUserMaterialService)

    const material = await showUserMaterial.execute({
      user_id,
      material_id: id,
    })

    return response.json(classToClass(material))
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const listUserMaterials = container.resolve(ListUserMaterialsService)

    const material = await listUserMaterials.execute({
      user_id,
    })

    return response.json(classToClass(material))
  }
}
