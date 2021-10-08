// const config = require('config')
const debug = require("debug")("app:startup");
const morgan = require("morgan");
const config = require("config");

const express = require("express");
const appCourses = require("./routes/courses");
const appBook = require("./routes/books")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routers
app.use("/api/courses", appCourses);
app.use('/api/books',appBook)
// Configuration
console.log(`Mail Server: ${config.get("mail.host")}`);
console.log(`Mail Password: ${config.get("mail.password")}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}
debug("Start Debugging enabled");
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`App: ${app.get("env")}`);
// console.log(process.env)

app.get("/", (req, res) => {
  res.send("How you doin");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}....`));
