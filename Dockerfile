FROM node:21-alpine3.18
WORKDIR /usr/local/app
COPY src/app.js .
EXPOSE 3000
CMD ["node", "app.js"]
