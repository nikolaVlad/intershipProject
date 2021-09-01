
const validate = (data , schema) =>
{
    let {error} = schema.validate(data);

    if(error)
    {
        let message = error.details[0].message.split('"')[2].trim();
        message = message[0].toUpperCase() + message.slice(1, message.length) + '!';
        let label =  error.details[0].path[0];

        return {
            message,
            label
        }
    }
   
    return false;
}

export default validate;