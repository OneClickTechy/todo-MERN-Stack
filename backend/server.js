import express from "express";
import dotenv from 'dotenv';
import userRouts from "./routes/user.routes.js";

//init app
const app = express();

//configure to access environment file
dotenv.config();

//routes
app.use("/api/auth", userRouts)


//server port
const port = process.env.PORT;

//server listener
app.listen(port, () => console.log(`Server is running on port ${port}
    http://localhost:${port}
    `))