import express  from "express";
import Register from "../controllers/Register.controller.js";
import Login from "../controllers/Login.controller.js";
// import GetDate from "../controllers/GetDate.controller.js";
// import AddToWatchlist from "../controllers/AddToWatchlist.controller.js";
// import AllWatchlist from "../controllers/AllWatchlist.controller.js";
// import DeleteStockFromWatchlist from "../controllers/DeleteFromWatchlist.controller.js";
//import InsertBand from "../controllers/InsertBand.controller.js"
// import FilterStockData from "../controllers/FilterStockData.controller.js"
// import WatchlistStockLastData from "../controllers/WatchlistStockLastData.controller.js"
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
// import { HolidaySchema } from "../validationSchema/HolidaySchema.js";
// import { WatchlistSchema } from "../validationSchema/WatchlistSchema.js";
//import  { BandSchema } from "../validationSchema/BandSchema.js";
const apiRoute = express.Router();

apiRoute.post('/register' ,RegisterSchema, Register);
apiRoute.post("/login",LoginSchema , Login);

export default apiRoute;