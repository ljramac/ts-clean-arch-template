import User from '../entities/user.entity';

export default interface UserRepository {
  list(filter: Object, options: Object): Promise<Object>;
  add(user: User): Promise<User>;
}
