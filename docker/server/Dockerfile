FROM node:14.17-alpine

LABEL maintainer="mudassar.ali@gmail.com"

ENV SOURCE_DIR=${BACKEND_SOURCE_PATH}
ENV DIR /app

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 

COPY ${SOURCE_DIR}/package.json /app
RUN npm install
COPY ${SOURCE_DIR}/ ${DIR} 

EXPOSE 8080
CMD npm start