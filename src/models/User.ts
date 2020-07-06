import { uuid } from 'uuidv4';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    user_password: string;

    @Column()
    user_name: string;

    @Column()
    user_email: string;

    @Column()
    user_school_id: string;

    @Column()
    user_room_id: string;

    @Column()
    user_teacher: boolean;

    @Column()
    user_country: string;

    @Column()
    user_state: string;

    @Column()
    user_city: string;

    @CreateDateColumn()
    user_created_at: Date;

    @UpdateDateColumn()
    user_updated_at: Date;
}

export default User;
