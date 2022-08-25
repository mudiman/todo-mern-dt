import mongoose from "mongoose";

import app from "./app.js";
import appConfig from "./config/app.js";


mongoose.connect("mongodb://localhost:27017/local", {
  authSource: "admin",
  user: appConfig.user,
  pass: appConfig.pass,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(appConfig.port, () => {
  console.log(`Server is running`);
});

