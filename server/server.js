const express = require("express");
const router = require("./app");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
const cors = require("cors");

app.use(cors());

app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"))
}

app.listen(port, () => {
  console.log("server is up on port", port);
});
