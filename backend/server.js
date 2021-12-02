import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import passport from 'passport';

dotenv.config();
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Connect DB
connectDB();

//auth JWT- passport init
app.use(passport.initialize());

//MOUNT ROUTERS
// app.use('/api/v1/auth', authRoutes);

//Connect to Server
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server Running on PORT: ${PORT}, on ${environment} mode`)
);
