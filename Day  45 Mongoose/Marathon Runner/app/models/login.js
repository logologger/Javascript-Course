var mongoose=require('mongoose');
var schema=mongoose.Schema;

var loginSchema=new schema({
   
    email:{
       type:String,
        required:true

    },
    password:{
       type:String,
       required:true

    }
    },
    {
    collection: 'login_fields'
   
    }


     
    
);

module.exports=mongoose.model('login',loginSchema);