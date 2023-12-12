const { Router } = require("express")
const customerContoller = require('../controllers/customer.controller')

const customerRouter = Router()

customerRouter.get('/:id', customerContoller.getCustomer)  

module.exports = { customerRouter }