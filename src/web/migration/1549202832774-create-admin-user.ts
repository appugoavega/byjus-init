import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../entity/user';

export class CreateAdminUser1547919837483 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    const user = new User();
    user.username = 'admin';
    user.password = 'admin';
    user.hashPassword();
    user.role = 'ADMIN';
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const userRepository = getRepository(User);
    await userRepository.delete({ username: 'admin' });
  }
}
