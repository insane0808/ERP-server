import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName : {
        type: String,
        min :6 ,
        max : 32
    },
    productImage : {
        type : String,
        min : 6,
        max : 32,
        required : true
    },
    dealership : {
        type : String,
        max : 32
    },
    applicableDate : {
        type : Date
    },
    productMOQ: [
        {
            Unit: { type: String, required: true },
            SubUnit : {type : String, required : true},
            Quantity : {type : Number, requireed : true},
            Price: { type: Number }
        }
    ]
})

export default mongoose.model("Product" , productSchema);