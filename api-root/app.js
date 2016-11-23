const app = require("express")();
const routes = require("./api/routes");

app.use("/", routes);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
