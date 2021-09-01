const express = require('express');
const jwt = require('jsonwebtoken');

const paymentApp = express();

paymentApp.use(express.json());

const PORT = 9000;

paymentApp.listen(PORT, async () => {
    console.log('Server in running on port : ' + PORT);
});

paymentApp.post('/checkPayment', (req, res) => {
    try {
        console.log('Check payment : =>');
        const token = req.body.token;

        const result = jwt.decode(token);

        if (result.creditCard) {
            console.log('Check is successfull.');
            return res.status(200).send({
                message: 'Check is successfull.',
            });
        }

        return res.status(400).send({
            error: {
                message: 'Check is failed.',
            },
        });
    } 
    
    catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong');
    }
});
