FROM node:16.16.0-alpine

LABEL maintainer="mudassar.ali@gmail.com"

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

ENV SOURCE_DIR=${FRONTEND_SOURCE_PATH}
ENV DIR /app

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 

RUN npm install --global pm2 yarn

COPY ${SOURCE_DIR}/package.json /app
COPY ${SOURCE_DIR}/yarn.lock /app
RUN yarn install --frozen-lockfile --production

COPY ${SOURCE_DIR}/ ${DIR} 

EXPOSE 3000
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
