import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("the database is connected to mongodb");
  })
  .catch(() => {
    console.log("the conection is not done : error 001");
  });
const app = express();
//to make input as json
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
