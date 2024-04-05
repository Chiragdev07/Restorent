class ErrorHandler extends Error{
    constructor(massage,status_code){
        super(massage);
        this.status_code=status_code;
    }
}

export const ErrorMidelwere=(err,req,res,next)=>{
     err.massage=err.massage || "Internal Server error";
     err.status_code=err.status_code || 5000;

     return res.status(err.status_code).json({
        suceess:false,
        massage:err,massage,
     });
} 

export default ErrorHandler;