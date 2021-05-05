const  monogoose  =  require('mongoose');
const schema = monogoose.Schema;
const products = require('./comptetive_percentile');
const bcrypt = require('bcrypt-nodejs');

const competitive_percentile = new schema({
    data_structure:Number,
    algorithms:Number,
    cplusplus:Number,
    java:Number,
    python:Number,
    html:Number,
    javascript:Number

});

const userSchema = new schema({
    name:String,
    profile_link:String,
    location:String,
    education:String,
    challenges_solved:Number,
    solution_submmited:Number,
    overall_rank:Number,
    followers:Number,
    following:Number,
    comptetive_percentile:[competitive_percentile],
    votes:Number,
    timestamp:Number,
    device_type:String,
    userId:{
       type: String,
       required:true,
       unique:true
    },
    password:{
        type:String,
        required:true,

    },

});

userSchema.index({userId:1});

userSchema.methods.hashPassword = function(password){
            return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};
userSchema.methods.validPassword = function(password){
    console.log("Hello",password,this);
            return   bcrypt.compareSync(password,this.password);
};

 const   user=  monogoose.model('user',userSchema);
 module.exports =user;