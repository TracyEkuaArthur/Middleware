const express = require("express");
const indexRouter = require("./routes/index.router")
const authRouter = require( "./routes/auth.router")

const app = express();
app.use(express.json())

app.use((req,res, next) =>{
   console.log("Global Middleware Called");
    next();
})

app.use("/", indexRouter);
app.use("/auth", authRouter);



app.listen(8800, console.log("👌 Server up and running"));