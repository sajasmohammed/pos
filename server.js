const  express = require("express");
const  mongoose = require("mongoose");
const  cors = require("cors");
const  bodyParser = require("body-parser");
const  morgan = require("morgan");
const  dotenv = require("dotenv");
const  productRouter = require("./routes/productRoutes");
const  path = require("path");

dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(con=>{
    console.log(`MongoDB is connect to the host: ${con.connection.host} `)
})
//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.use('/api/products/', productRouter)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("server start".PORT);
});

