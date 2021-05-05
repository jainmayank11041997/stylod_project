const Users =  require('./models/users');
const passport = require('passport');

const passportlocalStrategy = require('passport-local').Strategy;

exports.local =passport.use(new passportlocalStrategy((username,password,done)=>{
            passport.serializeUser(function(user, done) {
                done(null, user.id);
            });

            passport.deserializeUser(function(id, done) {
                            User.findById(id, function(err, user) {
                                done(err, user);
                            });
            });

            Users.findOne({userId:username},(err,user)=>{
          //      console.log(user.validPassword(password));
                console.log("hello",username,user,password);
                if(!user){
                    return done(null,false);
                }
                 else if(!user.validPassword(password)){
                    console.log("hello");
                     return done(null,false);
                }
               return done(null,user);
                
            })
        
}))