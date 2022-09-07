FROM node:16.16.0-alpine

LABEL maintainer="mudassar.ali@gmail.com"

ARG SOURCE_DIR
ENV SOURCE_DIR=${SOURCE_DIR}

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN mkdir -p /app
WORKDIR /app 

RUN npm install --global serve

COPY ./ /app
RUN cd /app && yarn install --production
RUN cd /app && yarn build

ENV NODE_ENV production

EXPOSE 3000
CMD [ "npx", "serve", "build" ]
