import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/config.js";
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import { notFound , errorHandler } from "./middlewares/errorMiddleware.js";
import path from 'path'

const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", ordersRoutes);
// app.use(notFound)
// app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

 
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));
  app.get('/*', (req, res) => { 
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
  })
} 

