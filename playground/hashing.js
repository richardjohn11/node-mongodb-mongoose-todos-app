const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

// jwt.sign
// jwt.verify
const data = {
  id: 10
};

const token = jwt.sign(data, "abc123");
console.log(token);

const result = jwt.verify(token, "abc123");
console.log(result);

// const message = "user number 1";

// const hash = SHA256(message).toString();
// console.log(message);
// console.log(hash);
