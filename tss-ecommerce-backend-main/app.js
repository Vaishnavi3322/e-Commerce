import express from 'express';
import dotenv from 'dotenv';
import api from "./routes/api.js";
import { connectDB } from './config/db.js'

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/', api);


// app.use('/api', api);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected at port: ${PORT}`);
})