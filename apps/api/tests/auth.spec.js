// import chai from "chai";
// import chaiHttp from "chai-http";

// import { userModel } from "../models/user.js";
// import app from "../app.js";
// import connectMongo from "../config/mongoconnect.js";

// process.env.NODE_ENV = 'test';

// let server = app;
// let should = chai.should();


// chai.use(chaiHttp);

// describe('todos', () => {
//     beforeEach((done) => { //Before each test we empty the database
//         userModel.deleteMany({}, (err) => {
//             done();
//         });
//     });

//     describe('/api/auth/signup', () => {
//         it('should Register user, login user, check token', function (done) {
//             chai.request(server)
//                 .post('/api/auth/signup')
//                 .send({
//                     'first_name': 'tester first',
//                     'last_name': 'tester second',
//                     'email': 'tester@gmail.com',
//                     'password': 'test123'
//                 })
//                 .end((err, res) => {
//                     res.should.have.status(201);
//                     chai.request(server)
//                         .post('/api/auth/login')
//                         .send({
//                             'email': 'tester@gmail.com',
//                             'password': 'test123'
//                         })
//                         .end((err, res) => {
//                             res.body.should.have.property('token');
//                             done();
//                         })
//                 })
//         })
//     })
// });