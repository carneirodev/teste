import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStudentHomework1593711080768
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'students_homeworks',
                columns: [
                    {
                        name: 'student_homework_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'homework_id',
                        type: 'uuid',
                    },
                    {
                        name: 'student_id',
                        type: 'uuid',
                    },
                    {
                        name: 'student_chapters',
                        type: 'integer',
                    },
                    {
                        name: 'student_text',
                        type: 'varchar',
                    },
                    {
                        name: 'homework_status',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students_homeworks');
    }
}
