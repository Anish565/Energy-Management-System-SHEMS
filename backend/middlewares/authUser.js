const authUser = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  console.log(token)

  if (!token) {
    return res.status(401).send('fuck off')
  }

  try {
    console.log('must decode')
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        throw Error(e)
      }
      req.customer = decoded
      console.log('decoded')
      next()
    })
  } catch (e) {
    res.status(401).send('fuck off')
  }
}

module.exports = { authUser }