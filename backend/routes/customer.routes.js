const { Router } = require("express")
const customerContoller = require('../controllers/customer.controller')
const { authUser } = require('../middlewares/authUser')

const customerRouter = Router()

customerRouter.get('/:id', customerContoller.getCustomer)
customerRouter.post('/serviceLoc', authUser, customerContoller.createServiceLog)

module.exports = { customerRouter }