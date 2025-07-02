import express from 'express';
import { createClient } from 'redis';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';

const app = express();

const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';

const redisClient = createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Redis Connected Successfully'));
redisClient.connect();

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URL)
  .then(() => console.log('Database Connected Successfully'))
  .catch(() => console.log('Database Connection Failed :('));

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));
