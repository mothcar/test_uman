hapi = require 'hapi'

demon = new hapi.Server()
#groc test

demon.connection
  host: 'localhost'
  port: 8000

demon.route
  method: 'GET'
  path: '/hello'
  handler: (request, reply) -> reply 'Hello World!!'

demon.start()