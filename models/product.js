const mongoose = require("mongoose")

var Schema = mongoose.Schema;


var productSchema = new Schema(
    {
        productName:{
            type: String,
            required: true,
            trim: true
        },
        productImage:{
            type: String,
            requires: true
    
        },
        gender: {
            type: String,
            required: true,
            trim: true
            
        },
        category: {
            type: String,
            required: true,
            trim: true
            
        },
        brand: {
            type: String,
            required: true,
            trim: true

        },
        mrp: {
            type: Number,
            required: true
          

        },
        price:{
            type: Number,
            required: true

        },
        createdOn: { 
            type: Date, 
            default: Date.now 
        },
        updatedOn: { 
            type: Date, 
            default: Date.now 
        }          
    }
);

module.exports = mongoose.model("Product", productSchema)