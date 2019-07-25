import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entity/user';

export const checkRole = (roles: Array<string>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        // Get the user ID from previous middleware
        const id = res.locals.jwtPayload.userId;

        // Get user role from the database
        const userRepository = getRepository(User);
        let user = new User();
        try {
            user = await userRepository.findOneOrFail(id);
        } catch (id) {
            res.status(401)
                .send();
        }
        console.log(user);
        // Check if array of authorized roles includes the user's role
        if (roles.indexOf(user.role) > -1) {
            next();
        } else {
            res.status(401)
                .send();
        }
    };
