import { JWT_TOKEN_SECRET, StatusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helpers.js";
import Jwt from "jsonwebtoken";

const AuthMiddleware =(req,res,next) => {

    if(req.headers['authorization'] == undefined)
        {
            return res.json(jsonGenerate(StatusCode.AUTH_ERROR , "Access denied" , null))
        }

    const token = req.headers['authorization'];

    try {

        const decoded = Jwt.verify(token, JWT_TOKEN_SECRET);
        console.log(decoded);
        req.userId = decoded.userId;

        return next();

    }
    catch (error){
        return res.json(jsonGenerate(StatusCode.UNPROCESSEABLE_ENTITY , "Unknown error occurred during authentication" , null ));
    }
};


export default AuthMiddleware;