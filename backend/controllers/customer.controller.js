const customer_model = require('../customerModel')
const { tx } = require('../utils/tx')

const getCustomer = async (req, res) => {
  try {
    const customers = await customer_model.getCustomer(req.params.id)
    res.json(customers)
  } catch (e) {
    res.json({ error: e.message })
  }
}

const createServiceLog = async (req, res) => {
  try {
    await tx(async client => {
      const address = await customer_model.registerAddress(client, req.body)
      console.log("address")
      await customer_model.registerServiceLoc(client, address.addressid, req.body)
      console.log("service loc")
      await customer_model.registerCustomerAddress(client, req.customer.custID, address.addressid, req.body.isBilling)
      console.log("customeraddress")
    })
    res.json({ message: 'Service log created successfully' })
  } catch (e) {
    console.log(e)
    res.json({ error: e.message })
  }
}



module.exports = { getCustomer, createServiceLog }