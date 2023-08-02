const express=require("express");
// const ErrorHandler = require("./utils/ErrorHandler");
const ErrorHandler=require("./middleware/error");
const app=express()
const cookieParse=require("cookie-parser");
const cookieParser = require("cookie-parser");
const bodyParser=require("body-parser");
const cors=require("cors");




app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));







// config

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config(
        {
            path:"backend/config/.env"
        }
    )
}


// import routes:
const user=require("./controller/user");
app.use("/api/v2/user",user);
// its for errorhandler
app.use(ErrorHandler);



module.exports=app;