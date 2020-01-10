# этап сборки
FROM node:lts-alpine as develop-stage
ENV APP_ROOT /app
WORKDIR ${APP_ROOT}
COPY package*.json ./
RUN npm install
COPY . .
