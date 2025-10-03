import { Router } from 'express';
import { getAllUsers, addUser } from './user.controller';
import pagination from './middlewares/pagination.middleware';

const router = Router();

router.use(pagination(20, 100));

router.get('/', getAllUsers).post('/', addUser);

export default router;
