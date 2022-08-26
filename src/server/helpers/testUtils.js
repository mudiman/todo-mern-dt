import chai from "chai";
import chaiHttp from "chai-http";
import { userModel } from "../models/user.js";
import app from "../app.js";

chai.use(chaiHttp);

export const getToken = () => {
    userModel.deleteMany({}, (err) => {

    });
    return new Promise((resolve, reject) => {
        chai.request(app)
            .post('/api/auth/signup')
            .send({
                'first_name': 'tester first',
                'last_name': 'tester second',
                'email': 'tester@gmail.com',
                'password': 'test123'
            })
            .end((err, res) => {
                chai.request(app)
                    .post('/api/auth/login')
                    .send({
                        'email': 'tester@gmail.com',
                        'password': 'test123'
                    })
                    .end((err, res) => {
                        console.info('res.body.token', res.body.token)
                        resolve(res.body.token);
                    })
            })
    });
}