import { getRepository } from 'typeorm';
import Room from '../models/Rooms';
import User from '../models/User';

interface Request {
    room_name: string;
    user_id: string;
}
interface Response {
    user: User;
}
class CreateUserService {
    public async execute({ room_name, user_id }: Request): Promise<Room> {
        const usersRepository = getRepository(User);
        const roomRepository = getRepository(Room);
        const user = await usersRepository.findOne({
            where: { user_id },
        });
        if (!user?.user_teacher) {
            throw new Error('You are not a Teacher.');
        }
        const room = roomRepository.create({
            room_name,
            teacher_id: user_id,
            school_id: 'IFSULDEMINAS',
        });

        await roomRepository.save(room);
        await usersRepository.update(user_id, {
            user_room_id: `${room.room_id} ${user.user_room_id}`,
        });
        return room;
    }
}

export default CreateUserService;
