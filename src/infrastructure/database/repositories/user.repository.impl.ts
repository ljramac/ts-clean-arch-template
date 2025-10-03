import User from '../../../domain/entities/user.entity';
import UserRepository from '../../../domain/repositories/user.repository';
import { UserModel } from '../../database/schemas/user.schema';

export class UserMongoRepository implements UserRepository {
  async list(filter: any = {}, options: any = {}): Promise<Object> {
    const { page = 1, limit = 10, skip = 0 } = options;

    const [result, total] = await Promise.all([
      UserModel.find(filter || {})
        .skip(skip)
        .limit(limit),
      UserModel.countDocuments(),
    ]);

    return {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      result,
    };
  }

  async add(user: User): Promise<User> {
    const newUser = new UserModel(user);

    return newUser.save();
  }
}
