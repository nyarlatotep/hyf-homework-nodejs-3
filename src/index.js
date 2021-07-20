//  this file should start an express server and that responds to the root url / with the body Hello World!. Ah and would be listen to the port 3000.

function response(server, port)
{
  return server, port;
}

var rootEndpoint = response('/', 3000);

if (rootEndpoint) {
  console.log("Hello World!");
}
else {
  console.log("Lose path to root endpoint or bad listener port config");
}


/*
   As Developer

  when create a GET request at /users

  then I will recieve a list of users.
*/

function developer(get, users)
{
  return get, users;
}

var request = developer(rootEndpoint, '/users');

if (request) {
  return '/users';
}

/*
 Create a user:
  As Developer
  when create a POST request at /users
  then I will recieve a the user created.

later we would like to create a bit more complete data model
but for now let's keep stuff symple our user would just have one property: id, this
property would just be the index of our Array of users**. So that first user would be { id: 0 }`
*/

function respond(POST, user)
{
  return POST, user;
}

var createUser = respond(request, user());

if (createUser) {
  return user();
}
/*
Get user:
  As Developer
  when create a GET request at /user/:id
  then I will recieve a the user.
Keep stuff symple, this means that a GET request would return `{ id: 0 }**.
Important
The endpoint /users that we previously created should stay be working
*/

function getUser(get, id)
{
  return get, id;
}

var retrive = getUser(createUser, { id: 0 });

if (getUser) {
  return user`({ id: 0 })**`;
}

/*
   As Developer
  when create a DELETE request at /user/:id
  then I will recieve a the user and a status code of 200.
  if the user doesn't exists:
  then the status code returned would be 204.
*/

function deleteUser(DELETE, code)
{
  return DELETE, code;
}

var answer = deleteUser(retrive, code());

if (answer) {
  return code();
}
if (code()) {
  console.log(code({ code_status: 200 }));
}
else {
  console.log(code({ code_status: 204 }+": "+"The user doesn't exist, please enter a valid user id"));
}