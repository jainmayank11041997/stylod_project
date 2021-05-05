const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const storePartnerSchema =  new Schema({
    name:{
        type:String
    },
    deals:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'product'
    }
})

const  storePartner = mongoose.model('storePartner',storePartnerSchema);
module.exports = storePartner;