## Demo #1: Building the image

```
docker build -t ajeetraina/reactapp .
```

## Demo #2: Using Multi-Stage Build

```
docker build -t ajeeetraina/reactapp-multi . -f Dockerfile.multi
```

## Demo #3: Using Healtcheck

```
docker build -t ajeeetraina/reactapp-healthcheck . -f Dockerfile.healthcheck
```

## Verify

```
docker ps
CONTAINER ID   IMAGE                          COMMAND                  CREATED          STATUS                             PORTS                    NAMES
90a78c8d12ab   ajeetraina/react-healthcheck   "docker-entrypoint.s…"   13 seconds ago   Up 13 seconds (health: starting)   0.0.0.0:3000->3000/tcp   sweet_lumiere
```







## React App

This is basic React application display "Hello World" on the screen. This application is used in the Docker Blog to demonstrate to improve the security of Docker images of a Node.js application.

#### Multi-Stage Build

Multistage builds offer a great way to streamline Docker images, making them smaller and more secure. We have taken our [Dockerfile](/Dockerfile) and improved it by using a multi-stage build. This allows us increase the security of our image by removing the build dependencies from the final image. The final image is now much smaller and only contains the files needed to run the application. The image size has been reduced from 1.7GB to 200MB.

Here is the new Dockerfile with the multi-stage build:

```Dockerfile
# Stage 1: Build the application
FROM node:21.5-alpine3.18 AS builder

# Set the working directory for the build stage
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code into the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the final image
FROM nginx:1.20

# Set the working directory within the container
WORKDIR /app

# Copy the built application files from the builder stage to the nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
```

**Result:**

Firstly we build an image with the default Dockerfile with the tag `react-app:` and then we build the image with the multi-stage Dockerfile with the tag `react-app-multi-stage:`. We can see that the image without the multi-stage build is 1.7GB and the image with the multi-stage build is 200MB. 

<img width="1512" alt="Screenshot 2024-01-14 at 7 20 54 PM" src="https://github.com/Pradumnasaraf/blog-react-app/assets/51878265/0aa02a8f-6f1e-445d-a093-34758c01f67e">


## Build Cache

## Clone the repo

```
 git clone https://github.com/ajeetraina/docker-image-intro
 cd docker-image-intro
 docker build -t ajeetraina/test-cache .
```

## Re-build the Image without any change

```
..
 => CACHED [2/5] WORKDIR /app                                                                                                                    0.0s
 => CACHED [3/5] COPY package*.json ./                                                                                                           0.0s
 => CACHED [4/5] RUN npm install
```

## Let's make a change in package.json 

Change "react": "^18.3.0" to "react": "^18.2.0"

## Re-build the Image

```
  docker build -t ajeetraina/test-cache .
```

## Result

 ```
=> CACHED [2/5] WORKDIR /app                                                                                                                    0.0s
 => [3/5] COPY package*.json ./                                                                                                                  0.0s
 => [4/5] RUN npm install
```
