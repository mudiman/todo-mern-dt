FROM node:14.17-alpine

LABEL maintainer="mudassar.ali@gmail.com"

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

ENV SOURCE_DIR=${FRONTEND_SOURCE_PATH}
ENV DIR /app

RUN mkdir -p ${DIR}
WORKDIR ${DIR} 

COPY ${SOURCE_DIR}/package.json /app
RUN npm install
COPY ${SOURCE_DIR}/ ${DIR} 

EXPOSE 3000
CMD npm start
