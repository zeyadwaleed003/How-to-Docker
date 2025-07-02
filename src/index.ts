import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';

const app = express();

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = '27017';
const DB_HOST = 'mongo';

const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URL)
  .then(() => console.log('Database Connected Successfully'))
  .catch(() => console.log('Database Connection Failed :('));

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));
