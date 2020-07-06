import {
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Homework from './Homework';
import Student from './User';

@Entity('students_homeworks')
class StudentHomework {
    @PrimaryGeneratedColumn('uuid')
    student_homework_id: string;

    @Column()
    homework_id: string;

    @ManyToOne(() => Homework)
    @JoinColumn({ name: 'homework_id' })
    homework: Homework;

    @Column()
    student_id: string;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @Column()
    student_chapters: string;

    @Column()
    student_text: string;

    @Column()
    homework_status: string;
}

export default StudentHomework;
