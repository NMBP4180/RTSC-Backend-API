import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';  
import bodyParser from 'body-parser';
import splashscreenRouter from './routes/splashscreen.route.js';
import signupRouter from './routes/signup.route.js';
import loginRouter from './routes/login.route.js';
import otpRouter from './routes/otp.route.js';
import stateRouter from './routes/state.route.js';
import academyRouter from './routes/academy.route.js';
import spaceTypeRouter from './routes/spaceType.route.js';
const app = express();
//cors policy
app.use(cors())
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/splashscreen', splashscreenRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/otp',otpRouter);
app.use('/api/state',stateRouter);
app.use('/api/academy',academyRouter);
app.use('/api/spaceType',spaceTypeRouter);
app.use('*',(req, res) =>{
  res.status(404).send('Route Not found');
});
app.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});
