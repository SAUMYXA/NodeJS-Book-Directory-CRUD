const express=require('express');
const errorHandler=require("./middleware/errorHandler");
const connectDB = require('./config/dbConnection.');
const dotenv=require("dotenv").config();
const app=express();
app.use(express.json());
connectDB();
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler);
app.use(express.urlencoded());       
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
});