const passport = require('passport');
const users = require('./models/users');
const jwt = require('jsonwebtoken');
const jwtStrategy =  require('passport-jwt').Strategy;
const extractJwt =  require('passport-jwt').ExtractJwt;
var config ={};
 config.secretKey="1234567890-1234567890";
 
exports.getToken =  (user)=>{
            return   jwt.sign(user,config.secretKey,{
                expiresIn:3600
            });
}

opts= {}
opts.jwtFromRequest =  extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.authenticat = passport.use(new jwtStrategy(opts,(jwt_payload,done) => {
            console.log(jwt_payload);
            users.findOne({_id:jwt_payload._id},(err,user)=>{
                            if(err)
                                {
                                    done(err,false);
                                }
                                else if(user){
                                        done(null,user);
                                }
                                else{
                                    done(null,false);
                                }
            });

}));

exports.verifyUSer =  passport.authenticate('jwt',{session:false});
