import { v4 as uuidv4 } from 'uuid';

const appConfig = {
    apiHost: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : "http://localhost:8080",
    nonce: Buffer.from(uuidv4()).toString('base64')
}

export default appConfig;