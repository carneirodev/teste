import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateRelationships1593750342100
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'homeworks',
            new TableForeignKey({
                name: 'HomeworkTeacher',
                columnNames: ['teacher_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'rooms',
            new TableForeignKey({
                name: 'RoomsTeacher',
                columnNames: ['teacher_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'students_homeworks',
            new TableForeignKey({
                name: 'HomeworkStudent',
                columnNames: ['student_id'],
                referencedColumnNames: ['user_id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'students_homeworks',
            new TableForeignKey({
                name: 'HomeworkHomework',
                columnNames: ['homework_id'],
                referencedColumnNames: ['homework_id'],
                referencedTableName: 'homeworks',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'students_homeworks',
            'HomeworkHomework',
        );
        await queryRunner.dropForeignKey(
            'students_homeworks',
            'HomeworkStudent',
        );
        await queryRunner.dropForeignKey('rooms', 'RoomsTeacher');
        await queryRunner.dropForeignKey('homeworks', 'HomeworkTeacher');
    }
}
