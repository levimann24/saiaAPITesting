const dotenv = require("dotenv");

dotenv.config();

let email = process.env.EMAIL;
console.log("Email: ", email);
