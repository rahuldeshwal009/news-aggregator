FROM node:lts-alpine
WORKDIR /app
COPY package.json vite.config.ts ./
RUN yarn install
COPY .  .
EXPOSE 8080
CMD ["yarn", "dev"]
