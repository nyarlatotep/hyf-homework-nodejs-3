//  this file should start an express server and that responds to the root url / with the body Hello World!. Ah and would be listen to the port 3000.

function response(server, port)
{
  return server, port;
}

var rootEndpoint = response('/', 3000);

if (rootEndpoint) {
  console.log("Hello World!")
}
else {
  console.log("Lose path to root endpoint or bad listener port config")
}