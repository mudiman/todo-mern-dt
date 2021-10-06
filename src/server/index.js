import mongoose from "mongoose";
import app from "./app.js";


mongoose.connect("mongodb://localhost:27017/local", {
  authSource: "admin",
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
