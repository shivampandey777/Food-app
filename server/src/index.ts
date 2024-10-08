import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectDB';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
import userRoute from './routes/user.route';
import restaurantRoute from './routes/restaurant.route';
import menuRoute from './routes/menu.route';
import orderRoute from './routes/order.route';

const app = express();
const port = process.env.PORT || 3000;

//default middlewares for mern 
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from this origin
  optionsSuccessStatus: 200,
  credentials: true // Enable credentials
};
app.use(cors(corsOptions));

//api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute );
app.use("/api/v1/order", orderRoute );



app.listen(port, () => {
  connectDB();
    console.log(`Server running at http://localhost:${port}`);
  });