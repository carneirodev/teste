import { Router } from 'express';
import { getRepository } from 'typeorm';
import StudentsHomework from '../models/StudentsHomeworks';

const studentHomeworkRouter = Router();

studentHomeworkRouter.get('/', async (request, response) => {
    const studentHomeworkRepository = getRepository(StudentsHomework);
    const studentHomework = await studentHomeworkRepository.find({
        where: { student_id: request.user.user_id },
    });

    return response.json(studentHomework);
});

studentHomeworkRouter.put('/text', async (request, response) => {
    try {
        const { student_text, student_homework_id } = request.body;
        const studentHomeworkRepository = getRepository(StudentsHomework);

        const studentHomework = await studentHomeworkRepository.update(
            student_homework_id,
            {
                student_text,
                homework_status: 'doing',
            },
        );
        return response.json(studentHomework);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

studentHomeworkRouter.put('/status', async (request, response) => {
    try {
        const { homework_status, student_homework_id } = request.body;
        const studentHomeworkRepository = getRepository(StudentsHomework);
        const studentHomework = await studentHomeworkRepository.update(
            student_homework_id,
            {
                homework_status,
            },
        );

        return response.json(studentHomework);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default studentHomeworkRouter;
