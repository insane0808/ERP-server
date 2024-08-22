import mongoose from "mongoose";

const economySchema = mongoose.Schema({
    month : {
        type: String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    totalPurchase : {
        type : Number
    },
    totalSale : {
        type : Number
    },
    totalRealizedPNL : {
        type : Number
    },
    totalUnRealizedPNL : {
        type : Number
    },
    totalUnPaidAmount : {
        type:Number
    },
    totalCreditAmount : {
        type : Number
    },
    otherExpanses : {
        type : Number
    },
    remarks : {
        type: string
    },
    createdOn : {
        type : Date,
    },
    updatedOn :
    {
        type : Date,
        default : Date.now
    }
})

export default mongoose.model("Economy" , economySchema);