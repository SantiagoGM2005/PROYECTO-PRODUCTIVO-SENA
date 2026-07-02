const express = require ("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors")

const mongoose = require("mongoose")

//connect db
mongoose.connect(process.env.MONGOOSEDB_RUL).then(()=>console.log("db connected")).then((err)=>{
    err;
})
const databaseSeeder = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json())

app.use(cors({
    origin: "*", // La URL exacta de tu frontend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


// database seeder routes
app.use("/api/seed",databaseSeeder )

// routes for users
//api/users/login
app.use("/api/users", userRoute)

//routes for products
app.use("/api/products", productRoute);

//routes for orders
app.use("/api/orders", orderRoute);


app.listen(PORT || 9000,()=>{
console.log(`server listening on port ${PORT}`);
});



//santigomelo12_db_user
//F7FrKC9IhJfSBDiX
//mongodb+srv://santigomelo12_db_user:F7FrKC9IhJfSBDiX@cluster0.z6v6vgq.mongodb.net/react-node-app



//test route
//app.get("/api/products",(req, res)=>{
//    res.json(products);
//});
//app.get("/api/products/:id",(req, res)=>{
//    const product = products.find((product)=>product.id==req.params.id)
//    res.json(products);
//});