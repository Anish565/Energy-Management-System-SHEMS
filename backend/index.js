const express = require('express')
const app = express()
const port = 3001

const customer_model = require('./customerModel')
const { customerRouter }  =  require('./routes/customer.routes.js')

app.use(express.json())

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.use('/customer', customerRouter)


app.get('/', (req, res) => {
    customer_model.getCustomers()
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

// app.post('/customers', (req, res) => {
//     customer_model.createCustomer(req.body)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })


// app.delete('/customers/:id', (req, res) => {
//     customer_model.deleteCustomer(req.params.id)
//     .then(response => {
//         res.status(200).send(response);
//     })
//     .catch(error => {
//         res.status(500).send(error);
//     })
// })

app.put('/customers/:id', (req, res) =>{
    const id = req.params.id;
    const body = req.body;
    customer_model
        .updateCustomer(id,body)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            res.status(500).semd(error);
        })
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})