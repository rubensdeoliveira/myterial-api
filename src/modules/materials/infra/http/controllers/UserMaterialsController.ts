import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import ListUserMaterialsService from '@modules/materials/services/ListUserMaterialsService'

export default class UserMaterialsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const listUserMaterials = container.resolve(ListUserMaterialsService)

    const material = await listUserMaterials.execute({
      user_id,
    })

    return response.json(classToClass(material))
  }
}
