import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateHomework1593710620808 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'homeworks',
                columns: [
                    {
                        name: 'homework_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'teacher_id',
                        type: 'uuid',
                    },
                    {
                        name: 'room_id',
                        type: 'uuid',
                    },
                    {
                        name: 'book_id',
                        type: 'uuid',
                    },
                    {
                        name: 'date',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('homeworks');
    }
}
