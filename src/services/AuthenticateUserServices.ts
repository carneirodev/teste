import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
    user_email: string;
    user_password: string;
}
interface Response {
    user: User;
    token: string;
}
class AuthenticateUserServices {
    public async execute({
        user_email,
        user_password,
    }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { user_email } });
        if (!user) {
            throw new Error('Incorrect email/password combination.');
        }

        const passwordMatched = await compare(
            user_password,
            user.user_password,
        );
        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination.');
        }

        const token = sign({}, '8891b1db4e844732585cbcf418c9e636', {
            subject: user.user_id,
            expiresIn: '1d',
        });

        return { user, token };
    }
}

export default AuthenticateUserServices;
