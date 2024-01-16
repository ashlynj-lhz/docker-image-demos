FROM ubuntu
WORKDIR /usr/local/app
RUN apt update && apt install -y nodejs
COPY index.js .
CMD ["node", "index.js"]
