import mongoose from "mongoose";

import appConfig from "./app.js";

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connection Established");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Connection Disconnected");
});

mongoose.connection.on("close", () => {
  console.log("MongoDB Connection Closed");
});

mongoose.connection.on("error", (error) => {
  console.og("MongoDB ERROR: " + error);
  process.exit(1);
});

mongoose.set("debug", appConfig.mongoDebug);

const connectMongo = await mongoose.connect(`mongodb://${appConfig.mongoHost}:27017/local`, {
    authSource: "admin",
    user: appConfig.user,
    pass: appConfig.pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default connectMongo;
