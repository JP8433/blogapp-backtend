const mongoose = require("mongoose");

const Connection = async (username, password) => {
  const URL = `mongodb://jay:Jay8433$@ac-loyrtaa-shard-00-00.qpnwkwo.mongodb.net:27017,ac-loyrtaa-shard-00-01.qpnwkwo.mongodb.net:27017,ac-loyrtaa-shard-00-02.qpnwkwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-fme8es-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

module.exports = Connection;
