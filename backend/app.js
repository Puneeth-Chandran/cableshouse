import express from 'express';
import dotenv from 'dotenv'
const app = express();
import { connectDatabase } from './config/dbConnect.js';

dotenv.config({path: 'backend/config/config.env'});

//Connecting to database
connectDatabase()

app.use(express.json());

//import all routes
import productRoutes from "./routes/products.js";


app.use("/api/v1",productRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});



