const validate = (schema) => {
    return (req, res, next) => {
        var { error } = schema.validate(req.body);   


        if (error) 
        {
            let message = error.details[0].message.split('"')[2].trim();
            message = message[0].toUpperCase() + message.slice(1, message.length) + '!';


            return res.status(400).send({
                message,
                label: error.details[0].path[0],
            });
        }

        next();
    };
};

export default validate;
