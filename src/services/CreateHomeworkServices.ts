import { startOfDay } from 'date-fns';
import { getCustomRepository, getRepository } from 'typeorm';
import Homework from '../models/Homework';
import HomeworksRepository from '../repositories/HomeworksRepository';
import CreateStudentHomeworkService from './CreateStudentHomeworkServices';

import User from '../models/User';

interface Request {
    teacher_id: string;

    room_id: string;

    book_id: string;

    date: Date;
}

interface Response {
    user: User;
}

class CreateHomeworkService {
    public async execute({
        date,
        teacher_id,
        room_id,
        book_id,
    }: Request): Promise<Homework> {
        const homeworksRepository = getCustomRepository(HomeworksRepository);
        const homeworkDate = startOfDay(date);

        const usersRepository = getRepository(User);
        const user = await usersRepository.findOne({
            where: { user_id: teacher_id },
        });
        if (!user?.user_teacher) {
            throw new Error('You are not a Teacher.');
        }

        const homework = homeworksRepository.create({
            teacher_id,
            room_id,
            book_id,
            date: homeworkDate,
        });
        await homeworksRepository.save(homework);
        const studentHomework = new CreateStudentHomeworkService();
        await studentHomework.execute({
            room_id: homework.room_id,
            homework_id: homework.homework_id,
        });

        return homework;
    }
}

export default CreateHomeworkService;
