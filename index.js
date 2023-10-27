const express=require('express');
const errorHandler=require("./middleware/errorHandler");
const connectDB = require('./config/dbConnection');
const cors=require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv").config();
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
connectDB();
app.use(cors());
const Route = require("./routes/booksRoutes");
app.use("/api", Route);
app.use(errorHandler);
app.use(express.urlencoded());       
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
});