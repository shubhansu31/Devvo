FROM node:14

WORKDIR /home/shubhansu31/login

COPY package*.json ./

RUN npm install

COPY . ./ 

EXPOSE 8080

CMD [ "node" , "server.js" ]
