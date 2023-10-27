const{constants}=require("../constants.js")
const errorHandler=(err,req,res,next) =>{
const statusCode=res.statusCode?res.statusCode:500;
switch(statusCode){
  case constants.NOT_FOUND: res.json({title: " Not Found",message: err.message,stackTrace:err.stack});
  break;
   case constants.VALIDATION_FAILED: res.json({title: " Validation Failed",message: err.message,stackTrace:err.stack});
   break;
   case constants.UNORTHORISED: res.json({title: " unorthorised",message: err.message,stackTrace:err.stack});
   break;
   case constants.FORBIDDEN: res.json({title: " forbidden",message: err.message,stackTrace:err.stack});
   break;
   case constants.SERVER_ERROR: res.json({title: "server error",message: err.message,stackTrace:err.stack});
   break;
   default:console.log("no error")
    break;
}

};
module.exports=errorHandler;