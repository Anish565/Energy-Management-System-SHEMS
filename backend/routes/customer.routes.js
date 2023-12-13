const { Router } = require("express")
const customerContoller = require('../controllers/customer.controller')
const { authUser } = require('../middlewares/authUser')

const customerRouter = Router()

customerRouter.get('/:id', customerContoller.getCustomer)
customerRouter.post('/serviceLoc', authUser, customerContoller.createServiceLog)
customerRouter.get('/devices', authUser, customerContoller.getDevicesList),
customerRouter.post('/customer/serviceLoc', authUser, customerContoller.getServiceLocationsByCustomer)
customerRouter.delete('/serviceLoc/:id', authUser, customerContoller.deleteServiceLocation)
customerRouter.post('/device/register', authUser, customerContoller.createDeviceRegister)



module.exports = { customerRouter }