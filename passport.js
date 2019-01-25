const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        if(email=='lenisandres5@gmail.com' && password=='123456'){
            user={email:email}
            cb(null, user, {
                message: 'Logged In Successfully'
            });
        }
        else{
            return cb(null, false, {message: 'Incorrect email or password.'});

        }

        //Assume there is a DB module pproviding a global UserModel
        // return UserModel.findOne({email, password})
        //     .then(user => {
        //         if (!user) {
        //             return cb(null, false, {message: 'Incorrect email or password.'});
        //         }

        //         return cb(null, user, {
        //             message: 'Logged In Successfully'
        //         });
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.SECRET_JWT
    },
    function (jwtPayload, cb) {

        //find the user in db if needed
        if(jwtPayload.email=='lenisandres5@gmail.com'){
            return cb(null, {email:jwtPayload.email});
        }
        else{
            return cb(err);
        }
        // return UserModel.findOneById(jwtPayload.id)
        //     .then(user => {
        //         return cb(null, user);
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });
    }
));