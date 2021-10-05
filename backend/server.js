import express  from "express";
import products  from "./products.js" ;
import dotenv from 'dotenv'
import connectDb from "./config/config.js";

const app = express();
dotenv.config()
connectDb();
app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  products.map((p) => {
    if (req.params.id === p._id) {
      return res.send(p);
    }
  });
});
const PORT = process.env.PORT || 5000 ; 
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
