import express  from "express";
import { AddProduct , GetProduct ,GetAllProduct ,DeleteProduct ,EditProduct} from "../controllers/Product.controller.js";
import {GetMonthlyEconomicDetails ,AddEconomy , GetCumulativeEconomicDetails } from "../controllers/Economy.controller.js";
import  { ProductSchema } from "../validationSchema/ProductSchema.js";
import { EconomySchema} from "../validationSchema/EconomySchema.js";

const apiProtected = express.Router();
//product based routes
apiProtected.post("/addproduct", ProductSchema , AddProduct);
apiProtected.get('/getproduct',ProductSchema,GetProduct);
apiProtected.get('/getallproduct',ProductSchema,GetAllProduct);
apiProtected.delete('/getallproduct',ProductSchema,DeleteProduct);
apiProtected.put('/editProduct',ProductSchema,EditProduct);

// // transaction based routes
// apiProtected.post("/addTransaction",TransactionSchema,AddTransaction);
// apiProtected.get("/gettransaction",TransactionSchema,GetTransaction);
// apiProtected.get("/getalltransaction",TransactionSchema,GetAllTransaction);
// apiProtected.put("/edittransaction",TransactionSchema,EditTransaction);
// apiProtected.post("/filterTransaction",TransactionSchema,FilterTransaction);

//employee based routes
// apiProtected.post("/addemployee",EmployeeSchema,AddEmployee);
// apiProtected.get("/getemployee",EmployeeSchema,GetEmployee);
// apiProtected.get("/getallemployee",EmployeeSchema,GetAllEmployee);
// apiProtected.post("/employeetimesheet",TimeSheetSchema,EmployeeTimeSheet);
// apiProtected.get("/getemployeetimesheet",TimeSheetSchema,GetEmployeeTimeSheet);
// apiProtected.put("/edittimesheet",TimeSheetSchema,EditTimeSheet);

// //stock based route
// apiProtected.get("/getproductstock",StockSchema,GetProductBasedStock);
// apiProtected.get("/getallstock",StockSchema,GetAllStock);
// apiProtected.put("/editstock",StockSchema,EditStock);

//economy based route
apiProtected.post("/economy",EconomySchema,AddEconomy);
apiProtected.get('/getmonthlyeconomicdetails',EconomySchema,GetMonthlyEconomicDetails);
apiProtected.get("/getcumulativedetails",EconomySchema,GetCumulativeEconomicDetails);

// //billing based route
// apiProtected.post("/generatebill",BillSchema,GenerateBill);
// apiProtected.get("/getbill",BillSchema,GetBill);
// apiProtected.get('/userbill',BillSchema,ParticularUserBill);

export default apiProtected;