const mango = require("mongoose");

const connect = async () => {
  await mango.connect(
    "mongodb+srv://sherazhameed:comsats6789@cluster0.9fpgton.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("database connection established");
};

module.exports = connect;
