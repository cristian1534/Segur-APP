const express = require("express");
const routes = require("./src/routes/auth_routes");
const body_parser = require("body-parser");
const cors = require("cors");
const app = express();

var cors_options = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors(cors_options))
app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running on ${PORT}`));
