## Demo #1 - Without Dockerfile

## Run a Ubuntu container

```
docker run -itd ubuntu /bin/bash
```

```
docker exec -it containerid bash
```

## Install Nodejs

```
apt update && apt install -y nodejs
```


## Commiting the Image

Open a new terminal and commit the changes

```
docker commit <container-id> custom-node
```

## Run a new container

```
docker run  custom-node node --version
```

## With Dockerfile

```
docker build -t ajeetraina/custom-node-2 .
```

## Verify the Node version

```
docker exec -it <container-id> bash
```

## Demo #3

Visualizing the image

```
docker image history ajeetraina/custom-node-2
```

Result:

```
IMAGE          CREATED             CREATED BY                                      SIZE      COMMENT
fcfb723029eb   3 minutes ago       CMD ["node" "index.js"]                         0B        buildkit.dockerfile.v0
<missing>      3 minutes ago       COPY index.js . # buildkit                      450B      buildkit.dockerfile.v0
<missing>      About an hour ago   RUN /bin/sh -c apt update && apt install -y …   124MB     buildkit.dockerfile.v0
<missing>      About an hour ago   WORKDIR /usr/local/app                          0B        buildkit.dockerfile.v0
<missing>      5 weeks ago         /bin/sh -c #(nop)  CMD ["/bin/bash"]            0B
<missing>      5 weeks ago         /bin/sh -c #(nop) ADD file:50f947da69b3b6c63…   69.3MB
<missing>      5 weeks ago         /bin/sh -c #(nop)  LABEL org.opencontainers.…   0B
<missing>      5 weeks ago         /bin/sh -c #(nop)  LABEL org.opencontainers.…   0B
<missing>      5 weeks ago         /bin/sh -c #(nop)  ARG LAUNCHPAD_BUILD_ARCH     0B
<missing>      5 weeks ago         /bin/sh -c #(nop)  ARG RELEASE                  0B
```

When you see <missing> in the output of docker image history, it means that the intermediate layers used during the image build are no longer available. These layers are considered intermediate and are not saved when the final image is built. Docker retains only the final image layers.

Docker does not save intermediate layers by default to save disk space. The final image contains only the information needed to run the container. If you want to inspect the contents of an intermediate layer or debug your Dockerfile, you can use tools like `docker build --target` to stop the build at a specific stage and investigate the layers at that point.


