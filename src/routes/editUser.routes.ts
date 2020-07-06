import { Router } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

const loggedRouter = Router();

interface Request {
    user_password: string;

    user_name: string;

    user_email: string;

    user_school_id: string;

    user_room_id: string;

    user_teacher: boolean;

    user_country: string;

    user_state: string;

    user_city: string;

    user_id: string;
}

loggedRouter.put('/', async (request, response) => {
    try {
        const {
            user_name,
            user_email,
            user_password,
            user_country,
            user_state,
            user_city,
        } = request.body;
        const { user_id } = request.user;
        const userRepository = getRepository(User);
        const hashedPassword = await hash(user_password, 8);
        const user = await userRepository.update(user_id, {
            user_name,
            user_email,
            user_password: hashedPassword,
            user_country,
            user_state,
            user_city,
        });

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

loggedRouter.get('/', async (request, response) => {
    try {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(request.user.user_id, {
            select: [
                'user_name',
                'user_email',
                'user_school_id',
                'user_room_id',
                'user_teacher',
                'user_country',
                'user_state',
                'user_city',
            ],
        });
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default loggedRouter;
