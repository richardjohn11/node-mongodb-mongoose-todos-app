const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

const id = "5c73388df0bea342c052721f";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found...");
//     }
//     console.log("Todo by ID", todo);
//   })
//   .catch(e => console.log(e));

// User.find({
//   _id: id
// }).then(users => {
//   console.log("Users", users);
// });

// User.findOne({ _id: id }).then(user => {
//   console.log("User", user);
// });

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("Id not found...");
    }
    console.log("User by ID", user);
  })
  .catch(e => console.log(e));
