const express = require('express');
const cors = require('cors');
const {v4:uuidv4} = require('uuid');
const { Receipt } = require('lucide-react');
const stripe = require('stripe')('sk_test_51PEuNtP4pK701krTXe3xBw3tu2QT2fFIoMbBIGlzubFB432xq6qRuyUvZ1YCJ0eOSbu9ndXL0ipBi4QOQMZ8EjQR00ZbayZNXp');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to our Vehicle Rental and Tours Site');
});

app.post('/checkout', async(req,res)=>{
    let error;
    let status;
    try{
        const {rental, token} = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create({
            amount: rental.totalPrice*100,
            currency: 'php',
            customer: customer.id,
            receipt_email: token.email,
            description: 'rental description here',
            shipping: {
                name:token.card.name,
                address:{
                    line1:token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                }
            }
        },{idempotencyKey:key})
        status="success";
    }
    catch(error){
        console.log(error);
        status="error"
    }
    res.json({status});
})

app.listen(8080,()=>{
    console.log('your site is running on port no 8080');
})
