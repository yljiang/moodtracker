var User = require('../models/user');

module.exports = function(){
    return{
        get: function(id, callback){
            User.findById(id, function(err, user){
                if(err || user === null){
                    console.error(err);
                }else{
                    // console.log(user);
                    callback(user.local.scores);
                    // return user.scores;
                }
            });
        },

        update: function(id, data){
            User.findOne({_id: id}, function(err, user){
                //only handles users signed on by user/pass
                user.local.scores.push(data);
                // user.markModified('anything');
                user.save();
            });
        },

        delete:function(id, entry){
            //delete an entry for user: id
        }


    };
};