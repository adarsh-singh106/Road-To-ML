FROM node:25-alpine

WORKDIR /home/app

COPY ./app .

RUN npm install

CMD ["node", "server.js"]