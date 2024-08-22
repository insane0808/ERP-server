import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode, JWT_TOKEN_SECRET } from "../utils/constant.js";
import Product from "../models/Economy.js"

export const AddEconomy = async (req, res) => {
    try {
            const {month , year , totalPurchase , totalSale , totalUnPaidAmount , totalCreditAmount , otherExpanses , remarks , createdOn } = req.body;
            
            const result = await Economy.create({
                month: month,
                year: year,
                totalPurchase : totalPurchase,
                
            })
            

            return res.json(jsonGenerate(StatusCode.SUCCESS, "product added successfull", { data: result }));

        }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Error occurred", null));
    }
}


export const GetMonthlyEconomicDetails = async (req, res) => {

}

export const GetCumulativeEconomicDetails = async (req, res) => {

}