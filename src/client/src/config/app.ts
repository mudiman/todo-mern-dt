import { uuid } from 'uuidv4';

const appConfig = {
    apiHost: "http://localhost:8080",
    nonce: new Buffer(uuid()).toString('base64');
}

export default appConfig;