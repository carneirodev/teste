import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1593711166262 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'user_email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'user_password',
                        type: 'varchar',
                    },
                    {
                        name: 'user_name',
                        type: 'varchar',
                    },
                    {
                        name: 'user_school_id',
                        type: 'varchar',
                    },
                    {
                        name: 'user_room_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'user_teacher',
                        type: 'boolean',
                        default: false,
                    },
                    {
                        name: 'user_country',
                        type: 'varchar',
                    },

                    {
                        name: 'user_state',
                        type: 'varchar',
                    },

                    {
                        name: 'user_city',
                        type: 'varchar',
                    },
                    {
                        name: 'user_created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'user_updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
