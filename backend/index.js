import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";
import userroute from "./routes/user-route.js";
import authroute from "./routes/auth-route.js";
dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY...");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT} `);
});

app.use("/api/user", userroute);

app.use("/api/auth", authroute);

//middleware function for handling errors

app.use((err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: err.message,
  });
});
