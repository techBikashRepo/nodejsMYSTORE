const express = require("express");
const chalk = require("chalk");
const home = require("./routes/home");
const addProduct = require("./routes/addProduct");
const renderEditProduct = require("./routes/editProduct");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", home);
app.use("/add-product", addProduct);
app.use("/edit-product", renderEditProduct);
app.use(express.static(__dirname));

const server = app.listen(PORT, () => {
  console.log(chalk.bgCyanBright.bold(`Server Running At PORT ${PORT}`));
});
