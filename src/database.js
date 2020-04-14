const mongoose = require("mongoose");

const uri =
  `mongodb+srv://${process.env.MONGODB_CREDENTIALS}@cluster0-uvim4.gcp.mongodb.net/test?retryWrites=true&w=majority";`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb is up and running");
});
