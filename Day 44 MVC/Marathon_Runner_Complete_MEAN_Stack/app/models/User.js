var mongoose=require('mongoose');
var schema=mongoose.Schema;

var userSchema=new schema({
   
    firstName:
    {
        type:String,
        required:true
        
    },
    lastName:{
       type:String,
        required:true

    },
    mobileno:{
       type:String,
        required:true

    },
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
    collection: 'register_user'
   
    }


     
    
);




module.exports=mongoose.model('User',userSchema);