
FROM node

RUN  mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

RUN npm test

CMD ["npm", "start" ]
