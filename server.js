const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.info("==> Listening on port %s.", PORT);
});
