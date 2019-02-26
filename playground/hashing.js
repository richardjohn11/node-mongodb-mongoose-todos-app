const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const password = "123abc!";

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

const hashedPass =
  "$2a$10$HPCiLj/uolc0dy3n7aA/QOOmObsNTHsLBZ9SMuvJVg.ADcFlBSRaa";

bcrypt.compare(password, hashedPass, (err, result) => {
  console.log(result);
});

// jwt.sign
// jwt.verify
// const data = {
//   id: 10
// };

// const token = jwt.sign(data, "abc123");
// console.log(token);

// const result = jwt.verify(token, "abc123");
// console.log(result);

// const message = "user number 1";

// const hash = SHA256(message).toString();
// console.log(message);
// console.log(hash);
