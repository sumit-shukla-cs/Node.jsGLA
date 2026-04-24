const validate = (schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate(req.body);
        if(error){
            const errorMessage = error.details.map((err)=>({
                field: err.path.join(','),
                message: err.message
            }));
            return res.status(400).json({
                success: false,
                error: errorMessage
            });
        }else{
            next();
        }   
    }                       

};

module.exports = validate;