FROM node:lts-bullseye

LABEL maintainer="com.devops"
LABEL description="react-redux-webpack deployment"

WORKDIR /react-redux-webpack

COPY package.json /react-redux-webpack

RUN npm install

COPY . /react-redux-webpack

CMD ["npm", "start"]