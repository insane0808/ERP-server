import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import apiRoute from "./routes/api.js";
import apiProtected from "./routes/apiProtected.js";
import { DB_CONNECT} from "./utils/constant.js";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";

const app = express();

mongoose.connect(DB_CONNECT);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
  });


mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);});
const PORT= 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/" , apiRoute);
app.use("/apiProtected/", AuthMiddleware ,apiProtected);

app.listen(PORT, () => console.log('server is running'))