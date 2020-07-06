import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateRoomsService from '../services/CreateRoomsService';
import Room from '../models/Rooms';

const roomsRouter = Router();

roomsRouter.get('/', async (request, response) => {
    const roomsRepository = getRepository(Room);
    const homeworks = await roomsRepository.find({
        where: { teacher_id: request.user.user_id },
    });

    return response.json(homeworks);
});

roomsRouter.post('/', async (request, response) => {
    try {
        const { room_name } = request.body;
        const createRooms = new CreateRoomsService();

        const room = await createRooms.execute({
            room_name,
            user_id: request.user.user_id,
        });
        return response.json(room);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default roomsRouter;
