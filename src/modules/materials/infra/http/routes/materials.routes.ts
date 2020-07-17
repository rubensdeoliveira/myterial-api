import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

// import multer from 'multer'
// import uploadConfig from '@config/upload'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import MaterialsController from '../controllers/MaterialsController'
import UserMaterialsController from '../controllers/UserMaterialsController'
// import UserAvatarController from '../controllers/UserAvatarController'

const materialsRouter = Router()
const materialsController = new MaterialsController()
const userMaterialsController = new UserMaterialsController()
// const userAvatarController = new UserAvatarController()
// const upload = multer(uploadConfig)

materialsRouter.use(ensureAuthenticated)

materialsRouter.get('/me/:id', userMaterialsController.show)
materialsRouter.get('/me', userMaterialsController.index)

materialsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      code: Joi.string().allow(''),
      name: Joi.string().required(),
      description: Joi.string().allow(''),
      manufacturer: Joi.string().allow(''),
      amount: Joi.number().required(),
      price: Joi.number(),
      unity: Joi.string().required(),
      note: Joi.string().allow(''),
    },
  }),
  materialsController.create,
)

// materialsRouter.patch(
//   '/avatar',
//   upload.single('avatar'),
//   userAvatarController.update,
// )

export default materialsRouter
