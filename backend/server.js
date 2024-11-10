import express from "express";
import dotenv from 'dotenv';

//init app
const app = express();

//configure to access environment file
dotenv.config();

//test
app.get("/", (req, res) => {
    res.send("HELLO")
})


//server port
const port = process.env.PORT;

//server listener
app.listen(port, () => console.log(`Server is running on port ${port}
    http://localhost:${port}
    `))