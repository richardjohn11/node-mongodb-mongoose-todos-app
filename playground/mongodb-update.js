const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // update document
    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5c7328bbf0a15d186cdc9458") },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    // Exercise User Collection update name and increment age
    db.collection("Users")
      .findOneAndUpdate(
        { name: "Chad" },
        {
          $set: {
            name: "Richard Jr"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);
