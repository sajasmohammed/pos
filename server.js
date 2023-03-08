import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";

dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(con=>{
    console.log(`MongoDB is connected to the host: ${con.connection.host} `)
})
//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.use('/api/products/', productRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("server start".PORT);
});

