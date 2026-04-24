const Joi=require("joi");

const schemaValidation=Joi.object({
    name:Joi.string()
    .required()
    .messages({
        "string.base":"Name should be a string",
        "string.empty":"Name cannot be empty",
        "any.required":"Name is required"
    }),
    mobile:Joi.number().required(),
    

});

module.exports=schemaValidation;