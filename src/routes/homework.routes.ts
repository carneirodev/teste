import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import HomeworkRepository from '../repositories/HomeworksRepository';
import CreateHomeworkService from '../services/CreateHomeworkServices';
import User from '../models/User';

interface Response {
    user: User;
}
const homeworksRouter = Router();

// homeworksRouter.get('/', async (request, response) => {
//     const homeworksRepository = getCustomRepository(HomeworkRepository);
//     const homeworks = await homeworksRepository.find();
//     console.log(homeworks);
//     return response.json(homeworks);
// });

homeworksRouter.get('/', async (request, response) => {
    const homeworksRepository = getCustomRepository(HomeworkRepository);
    const homeworks = await homeworksRepository.findByTeacher(
        request.user.user_id,
    );

    return response.json(homeworks);
});

homeworksRouter.get('/room/:room_id', async (request, response) => {
    const homeworksRepository = getCustomRepository(HomeworkRepository);
    const { room_id } = request.params;
    const homeworks = await homeworksRepository.findByRoom(room_id);

    return response.json(homeworks);
});

homeworksRouter.post('/', async (request, response) => {
    try {
        const { room_id, book_id, date } = request.body;

        const parsedDate = parseISO(date);
        const creatHomework = new CreateHomeworkService();

        const homework = await creatHomework.execute({
            date: parsedDate,
            teacher_id: request.user.user_id,
            room_id,
            book_id,
        });

        return response.json(homework);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default homeworksRouter;
