const getUsers = (request, response) => {};
const getUser = (request, response) => {
  const { id } = request.params;
  response.status(200);
  response.send(`User ID is ${id}`);
};
const createUser = (request, response) => {
  response.status(201);
  response.send(request.body);
};
const updateUser = (request, response) => {};
const deleteUser = (request, response) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
