FROM node

WORKDIR /app

COPY . .

RUN npm install

RUN npm i -g sequelize-cli

