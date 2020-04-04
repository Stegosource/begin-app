@app
begin-app

@http
get /
post /stuff

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
