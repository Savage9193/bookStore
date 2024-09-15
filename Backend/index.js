import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors());

app.use(express.json())

dotenv.config();
const port = process.env.PORT || 4000;
const URI=process.env.mongoDBURI
console.log(port)

//connect to mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB");
} catch (error) {
    console.log("Error:",error)  
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



