import express from 'express';
import userRoutes from './interfaces/rest/user.routes';
import database from './infrastructure/boot/database';

const app = express();
const PORT = process.env.PORT || 3000;

const appRouter = express.Router();

appRouter.use('/users', userRoutes);

app.use(express.json());
app.use('/api', appRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  database();
});
