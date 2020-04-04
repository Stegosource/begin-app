let { parse } = require('querystring')

exports.handler = async function(req) {
  let value = {...req}
  if (value.isBase64Encoded)
    value.decoded = parse(Buffer.from(req.body, 'base64').toString())
  return {
    statusCode: 200,
    body: JSON.stringify(value)
  }
}
