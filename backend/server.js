import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/config.js";
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import { notFound , errorHandler } from "./middlewares/errorMiddleware.js";
const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use(notFound)
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
