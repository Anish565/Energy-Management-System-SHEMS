const customer_model = require('../customerModel')

const getCustomer = async (req, res) => {
  try {
    const customers = await customer_model.getCustomer(req.params.id)
    res.json(customers)
  } catch (e) {
    res.json({ error: e.message })
  }
}

module.exports = { getCustomer }