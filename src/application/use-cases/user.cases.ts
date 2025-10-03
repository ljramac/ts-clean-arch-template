import UserRepository from '../../domain/repositories/user.repository';
import User from '../../domain/entities/user.entity';

export const list = (
  repository: UserRepository,
  filter: Object,
  options: Object,
): Promise<Object> => repository.list(filter, options);
export const add = (repository: UserRepository, user: User): Promise<User> => repository.add(user);
