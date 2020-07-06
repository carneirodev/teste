import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
class Rooms {
    @PrimaryGeneratedColumn('uuid')
    room_id: string;

    @Column()
    room_name: string;

    @Column()
    teacher_id: string;

    @Column()
    school_id: string;
}

export default Rooms;
