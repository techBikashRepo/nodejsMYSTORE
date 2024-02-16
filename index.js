const express = require("express");
const chalk = require("chalk");
const home = require("./routes/home");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", home);
app.use(express.static(__dirname));

const server = app.listen(PORT, () => {
  console.log(chalk.bgCyanBright.bold(`Server Running At PORT ${PORT}`));
});
