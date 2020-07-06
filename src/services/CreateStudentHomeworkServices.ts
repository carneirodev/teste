import { getRepository } from 'typeorm';
import Homework from '../models/Homework';
import StudentsHomeworks from '../models/StudentsHomeworks';

import User from '../models/User';

interface Request {
    room_id: string;
    homework_id: string;
}

interface Response {
    user: User[];
    homework: Homework;
    studentHomeworks: StudentsHomeworks;
}

class CreateHomeworkService {
    public async execute({ room_id, homework_id }: Request): Promise<void> {
        const usersRepository = getRepository(User);

        const studentHomeworksRepository = getRepository(StudentsHomeworks);

        const user = await usersRepository.find({
            // Peguei a sala inteira
            where: { user_room_id: room_id },
        });
        // eslint-disable-next-line no-shadow
        user.forEach(async user => {
            if (!user.user_teacher) {
                const studentHomeworks = studentHomeworksRepository.create({
                    homework_id,
                    student_id: user.user_id,
                    student_chapters: '01',
                    homework_status: 'todo',
                    student_text: '',
                });

                await studentHomeworksRepository.save(studentHomeworks);
            }
        });
    }
}

export default CreateHomeworkService;
