FROM node:alpine

WORKDIR /usr/app
COPY ./Node-Express-MongoDB-Server ./
RUN npm install
CMD npm start
