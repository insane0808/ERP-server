import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode, JWT_TOKEN_SECRET}  from "../utils/constant.js";
import bcrypt from 'bcrypt' ;
import User from "../models/User.js";
import Jwt from "jsonwebtoken";


const Login = async (req,res) => {

    const errors = validationResult(req);

    if (errors.isEmpty())
    {
        const {username, password} = req.body;
        const user = await User.findOne({username : username});

        if (!user){
            return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR , "User  does not exists" , null)) ;
        }

        const verified = bcrypt.compareSync(password,user.password);
        if (!verified)
        {
            return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR , "Password not verified", null));
        }

        const token = Jwt.sign({userId : user._id},JWT_TOKEN_SECRET);

        return res.json(jsonGenerate(StatusCode.SUCCESS , "Login Successfull" ,{userId : user._id , token : token}));
    }

    return res.json(jsonGenerate(StatusCode.VALIDATION_ERROR , "Please enter uername and password" , null ));

}


export default Login ;
