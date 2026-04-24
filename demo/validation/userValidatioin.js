const Joi=require("joi");

const schemaValidation=Joi.object({
    name:Joi.string()
    .required()
    .messages({
        "string.base":"Name should be a string",
    }),
    mobile:Joi.number().required(),


});

module.exports=schemaValidation;