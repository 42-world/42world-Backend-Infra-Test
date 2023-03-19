FROM node:16-alpine3.14

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile && yarn build

EXPOSE 3000

ENTRYPOINT [ "node", "./dist/main.js" ]
