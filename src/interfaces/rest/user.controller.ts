import { RequestHandler } from 'express';
import { list, add } from '../../application/use-cases/user.cases';
import { UserMongoRepository } from '../../infrastructure/database/repositories/user.repository.impl';

const userRepository = new UserMongoRepository();

export const getAllUsers: RequestHandler = async (req: any, res) => {
  const filter = req.query?.filter ? JSON.parse(req.query.filter as string) : {};
  const options = req?.options || {};

  res.send(await list(userRepository, filter, options));
};

export const addUser: RequestHandler = async (req, res) => {
  res.send(await add(userRepository, req.body?.data));
};
