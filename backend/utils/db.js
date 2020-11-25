const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  }, (err, db) => {
    console.log("connected to DB!");

});
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function() {
  // we're connected!
});


module.exports = database;