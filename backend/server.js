import express  from "express";
 import dotenv from 'dotenv'
import connectDb from "./config/config.js";
import productsRoutes from "./routes/productsRoutes.js";
const app = express();
dotenv.config()
app.use('/api/products',productsRoutes)
connectDb();
app.get("/", (req, res) => {
  res.send("api is running");
});

const PORT = process.env.PORT || 5000 ; 
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
