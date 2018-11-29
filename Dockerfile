FROM node:10
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
EXPOSE 5050