import chai from "chai";
import chaiHttp from "chai-http";

import { todoModel } from "../models/todo.js";
import app from "../app.js";
import connectMongo from "../config/mongoconnect.js";
import { getToken } from "../helpers/testUtils.js";

process.env.NODE_ENV = 'test';

let should = chai.should();


const token = await getToken();

chai.use(chaiHttp);

describe('todos', () => {
  beforeEach((done) => {
    todoModel.deleteMany({}, (err) => {
      done();
    });
  });

  it('get empty api todo', function (done) {
    chai.request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property("errors");
        done();
      });
  });

  it('post sample todo', function (done) {
    chai.request(app)
      .post('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .send({
        'body': 'tester todo'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property("body");
        done();
      });
  });
});