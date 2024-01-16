## Demo #1 - Without Dockerfile

## Run a Ubuntu container

```
docker run --dit ubuntu /bin/bash
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
docker run -ti custom-node
```

## Verify if Node is installed

```
node --version
```






