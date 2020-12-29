const mongoose=require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const userSchema=mongoose.Schema({
    email : { type : String,required:true, unique:true,uniqueCaseInsensitive: true },
    password : {type :String,required:true}
    
})
userSchema.plugin(uniqueValidator, { message: 'Error, email already in use' });
// userSchema.plugin(uniqueValidator);
    module.exports=mongoose.model('User',userSchema)
