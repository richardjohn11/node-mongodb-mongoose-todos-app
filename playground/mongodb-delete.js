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

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // Exercise
    //deleteMany for Users Collection
    // db.collection("Users")
    //   .deleteMany({ name: "Andrew" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5c7319e07389c138d04dc463") })
      .then(results => {
        console.log(results);
      });

    client.close();
  }
);
