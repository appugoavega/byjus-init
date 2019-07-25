import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Locals } from '../providers/locals';
// import { isObject } from 'util';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    // Get the jwt token from the head
    const token = req.headers.auth as string;
    // let jwtPayload: { userId?: string, username?: string};
    let jwtPayload;

    // Try to validate the token and get data
    try {
        jwtPayload = jwt.verify(token, Locals.config().JWT_SECRET);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        // If token is not valid, respond with 401 (unauthorized)
        res.status(401)
            .send();

        return;
    }

    // // The token is valid for 1 hour
    // // We want to send a new token on every request
    // const { userId, username } = jwtPayload;
    // const newToken = jwt.sign({ userId, username }, Locals.config().JWT_SECRET, {
    //     expiresIn: Locals.config().expiresIn
    // });
    // res.setHeader('token', newToken);

    // // Call the next middleware or controller
    next();
};
