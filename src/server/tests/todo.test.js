import app from "../app";
import mongoose from "mongoose";
import supertest from "supertest";
import { todoModel } from "../models/todo";
import appConfig from "../config/app";

beforeAll((done) => {
  //Todo: Should be separate test db with seed data
  mongoose.connect(
    "mongodb://localhost:27017/test",
    {
      authSource: "admin",
      user: appConfig.user,
      pass: appConfig.pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => done()
  );
});

afterAll((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test("GET /todos", async () => {
  const todo = await todoModel.create({ name: "Test todo 1" });

  await supertest(app)
    .get("/todos/" + todo.id)
    .expect(200)
    .then((response) => {
      expect(response.body._id).toBe(todo.id);
      expect(response.body.name).toBe("Test todo 1");
    });
});
