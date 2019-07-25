import { Router } from 'express';
import { UserController } from '../controllers/user-controller';
import { checkJwt } from '../middleware/check-jwt';
import { checkRole } from '../middleware/check-role';

const userRouter = Router();

// Get all users
userRouter.get('/', [checkJwt], UserController.listAll);
// userRouter.get('/', [checkJwt, checkRole(['ADMIN'])], UserController.listAll);

// Get one user
userRouter.get(
    '/:id([0-9]+)',
    [checkJwt, checkRole(['ADMIN'])],
    UserController.getOneById
);

// Create a new user
userRouter.post('/', [checkJwt, checkRole(['ADMIN'])], UserController.newUser);

// Edit one user
userRouter.patch(
    '/:id([0-9]+)',
    [checkJwt, checkRole(['ADMIN'])],
    UserController.editUser
);

// Delete one user
userRouter.delete(
    '/:id([0-9]+)',
    [checkJwt, checkRole(['ADMIN'])],
    UserController.deleteUser
);

export { userRouter };
