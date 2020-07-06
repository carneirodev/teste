import { Router } from 'express';

import AuthenticateUserServices from '../services/AuthenticateUserServices';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { user_email, user_password } = request.body;

        const authenticateUser = new AuthenticateUserServices();

        const { user, token } = await authenticateUser.execute({
            user_email,
            user_password,
        });
        delete user.user_password;
        return response.json({ user, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default sessionsRouter;
