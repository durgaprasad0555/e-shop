const app=require("./app");
const connectDatabse = require("./db/Database");



// handlng uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server for handling uncaught exception`);
})

// config


if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config(
        {
            path:"backend/config/.env"
        }
    )
}

// connect db
connectDatabse();

// create a server

const server=app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})

// unhandle promise rejction

process.on("uncaughtException",(err)=>{
    console.log(`Shutting down the server for ${err.message}`)
    console.log(`shutting down the server  for unhandle promise rejection`);

    server.close(()=>{
        process.exit(1);
    })
})