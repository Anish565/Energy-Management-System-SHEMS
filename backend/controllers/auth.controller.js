const { getCustomerByName } = require('../customerModel')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    const customer = await getCustomerByName(req.body.cfname, req.body.clname)

    if (customer.passcode !== req.body.passcode) {
      return res.json({ error: 'Incorrect password' })
    }

    jwt.sign({ id: customer.custID }, 'secret', (err, token) => {
      if (err) {
        return res.json({ error: 'Error signing token' })
      }

      return res.json({ token })
    })
  } catch (e) {
    res.json({ error: e.message })
  }
}

const signup = async (req, res) => {
  try {
    const customer = await getCustomerByName(req.body.cfname, req.body.clname)

    if (customer) {
      return res.json({ error: 'Customer already exists' })
    }

    const newCustomer = await createCustomer(req.body)

    jwt.sign({ id: newCustomer.custID }, 'secret', (err, token) => {
      if (err) {
        return res.json({ error: 'Error signing token' })
      }

      return res.json({ token, message: "Signup successful" })
    })
  } catch (e) {
    res.json({ error: e.message })
  }
}

module.exports = { login }