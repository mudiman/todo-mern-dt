FROM node:16.16.0-alpine

LABEL maintainer="mudassar.ali@gmail.com"

ARG SOURCE_DIR
ENV SOURCE_DIR=${SOURCE_DIR}

RUN mkdir -p /app
WORKDIR /app 

RUN npm install --location=global pm2

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

COPY ./ /app
RUN cd /app && yarn install --production

EXPOSE 8080
CMD [ "pm2-runtime", "start", "ecosystem.config.cjs" ]