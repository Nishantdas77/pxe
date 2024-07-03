const app = require("./app");
const connectDatabase = require("./config/database");

connectDatabase();

app.listen(5000, () => {
  console.log(`server running  http://localhost:4000`);
});