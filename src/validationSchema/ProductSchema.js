import {check} from "express-validator";

export const ProductSchema = [

    check("productName", "product name is required").exists()
    .trim().isLength({min:6,max:32}),

    check("productImage", "Product Image is required").exists().isLength({min:6, max:100}).trim(),
    // check('applicableDate')
    // .trim()
    // .isDate()
    // .withMessage('Must be a valid date')  
]