import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode, JWT_TOKEN_SECRET } from "../utils/constant.js";
import Product from "../models/Product.js"

export const AddProduct = async (req, res) => {
    try {

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { productName, productImage, dealership, applicableDate, productMOQ } = req.body;
            const exisitngProduct = await Product.findOne({ productName: productName });

            if (exisitngProduct) {
                return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Product already exists", null));
            }

            const result = await Product.create({
                productName: productName,
                productImage: productImage,
                dealership: dealership,
                applicableDate: applicableDate,
                productMOQ: productMOQ
            })

            return res.json(jsonGenerate(StatusCode.SUCCESS, "product added successfull", { data: result }));

        }

        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Please enter correct product details", null));

    }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Error occurred", null));
    }
}

export const GetProduct = async (req, res) => {
    try {

        const product = req.body.Product;
        const response = await Product.findOne({ productName: product });
        return res.json(jsonGenerate(StatusCode.SUCCESS, "Required product", { data: response }));

    }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Error occurred", null));
    }
}
export const GetAllProduct = async (req, res) => {
    try {

        const allProduct = await Product.find();
        return res.json(jsonGenerate(StatusCode.SUCCESS, "List of all product", { data: allProduct }));
    }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Error occurred", null));
    }
}

export const DeleteProduct = async (req, res) => {
    try {

        const product = req.body.Product;
        const response = await Product.deleteOne({ productName: product });
        return res.json(jsonGenerate(StatusCode.SUCCESS, "Product deleted from list"));
    }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Error occurred", null));
    }
}
export const EditProduct = async (req, res) => {
    try {

        const errors = validationResult(req);



    }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "Error occurred", null));
    }
}