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






