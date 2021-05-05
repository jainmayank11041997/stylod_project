const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
    },
    comment:{
        type:String,

    },
    image:{
        type:String
    },
    rating:{
        type:String
    }

});

const productsSchema = new Schema({
ownerName:{
    type:String
},
productName:{
    type:String
},
price:{
    type:Number
},
quantity:{
    type:String
},
location:{
type:String
},
discount:{
    type:String
},
pointBalance:{
    type:Number,
    default:0
},
reviews:[reviewSchema]

});


const products =  mongoose.model('product',productsSchema);
module.exports = products;