import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

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
}

class CreateUserService {
    public async execute({
        user_name,
        user_email,
        user_password,
        user_school_id,
        user_room_id,
        user_teacher,
        user_country,
        user_state,
        user_city,
    }: Request): Promise<User> {
        const usersRepository = getRepository(User);
        const checkUserExists = await usersRepository.findOne({
            where: { user_email },
        });
        if (checkUserExists) {
            throw new Error('Email address already used.');
        }
        const hashedPassword = await hash(user_password, 8);

        const user = usersRepository.create({
            user_name,
            user_email,
            user_password: hashedPassword,
            user_school_id,
            user_room_id,
            user_teacher,
            user_country,
            user_state,
            user_city,
        });
        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
