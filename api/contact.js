module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.send({
        message: 'Bitch get the fuck out',
      })
      break
    case 'POST':
      console.log('req', req)

      let data = { darryl: 'the fucking boss' }
      res.send({
        data,
      })
      break

    default:
      break
  }
}
