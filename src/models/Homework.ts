import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Rooms from './Rooms';
import Teacher from './User';

@Entity('homeworks')
class Homework {
    @PrimaryGeneratedColumn('uuid')
    homework_id: string;

    @Column()
    teacher_id: string;

    @ManyToOne(() => Teacher)
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @Column()
    room_id: string;

    @ManyToOne(() => Rooms)
    @JoinColumn({ name: 'room_id' })
    room: Rooms;

    @Column()
    book_id: string;

    // @ManyToOne(() => Books)
    // @JoinColumn({ name: 'book_id' })
    // book: Books;

    @Column()
    date: Date;
}

export default Homework;
