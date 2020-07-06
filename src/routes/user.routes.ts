import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const {
            user_name,
            user_email,
            user_password,
            user_school_id,
            user_room_id,
            user_teacher,
            user_country,
            user_state,
            user_city,
        } = request.body;
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            user_name,
            user_email,
            user_password,
            user_school_id,
            user_room_id,
            user_teacher,
            user_country,
            user_state,
            user_city,
        });
        delete user.user_password;
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
