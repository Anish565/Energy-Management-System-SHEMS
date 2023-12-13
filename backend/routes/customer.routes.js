const { Router } = require("express")
const customerContoller = require('../controllers/customer.controller')
const { authUser } = require('../middlewares/authUser')

const customerRouter = Router()

customerRouter.get('/:id', customerContoller.getCustomer)
customerRouter.post('/serviceLoc', authUser, customerContoller.createServiceLog)
customerRouter.get('/devices', authUser, customerContoller.getDevicesList),
customerRouter.post('/serviceLocs', authUser, customerContoller.getServiceLocationsByCustomer)
customerRouter.delete('/serviceLoc/:id', authUser, customerContoller.deleteServiceLocation)
customerRouter.post('/device/register', authUser, customerContoller.createDeviceRegister)

customerRouter.post('/graph/totalenergy/location', authUser, customerContoller.getTotalEnergyPerLocation)
customerRouter.post('/graph/totalenergy/device', authUser, customerContoller.getTotalEnergyPerDevice)
customerRouter.post('/graph/totalprice/location', authUser, customerContoller.getTotalPricePerLocation)
customerRouter.post('/graph/totalprice/device', authUser, customerContoller.getTotalPricePerDevice)


module.exports = { customerRouter }