import { EntityRepository, Repository } from 'typeorm';
import Homework from '../models/Homework';

@EntityRepository(Homework)
class HomeworksRepository extends Repository<Homework> {
    public async findByTeacher(teacher_id: string): Promise<Homework[] | null> {
        // const findHomeworkIndex = this.homeworks.filter(
        //     homework => homework.teacher_id === teacher_id,
        // );
        const findHomework = await this.find({
            where: { teacher_id },
        });
        return findHomework || null;
    }

    public async findByRoom(room_id: string): Promise<Homework[] | null> {
        const findHomework = await this.find({
            where: { room_id },
        });
        return findHomework || null;
    }
}

export default HomeworksRepository;
