const express = require("express");
const mongoose = require("mongoose");
const config = require("../config/config");
const path = require('path');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });
require("./models/user");

const app = express();
require("./routes/auth")(app);
require("./routes/profile")(app);
require("./routes/preferences")(app);
require("./routes/match")(app);

app.use(express.static('../../build'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

app.listen(4000, () => {
  console.log("Listening on port 4000.");
});
