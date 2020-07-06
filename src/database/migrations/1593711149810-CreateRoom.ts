import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRoom1593711149810 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rooms',
                columns: [
                    {
                        name: 'room_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'room_name',
                        type: 'varchar',
                    },
                    {
                        name: 'teacher_id',
                        type: 'uuid',
                    },
                    {
                        name: 'school_id',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rooms');
    }
}
