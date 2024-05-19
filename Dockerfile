FROM node:16.20.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "80"]