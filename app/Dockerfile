FROM ubuntu:16.04

RUN apt-get update && \
  apt-get install -y  curl && \
  curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs

WORKDIR /app
COPY . /app

RUN npm install && npm install -g expo-cli
CMD [ "npm", "start" ]