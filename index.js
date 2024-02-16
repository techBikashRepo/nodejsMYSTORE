const express = require("express");
const chalk = require("chalk");
const router = require("./routes/home");
const app = express();
const PORT = 3000;

app.use("/", router);

const server = app.listen(PORT, () => {
  console.log(chalk.bgCyanBright.bold(`Server Running At PORT ${PORT}`));
});
