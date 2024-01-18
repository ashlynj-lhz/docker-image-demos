## 

```
export DOCKER_BUILDKIT=1
```

## Setting the BuildKit environment variable when running the docker build command, run:

```
docker buildx create --name mybuilder
```

## Creates a builder named my-builder that will run in a container

```
 docker buildx build --push --platform linux/amd64,linux/arm64 --tag ajeetraina/demo-buildx:1.0 .
```

## Verify it on Docker Hub

![image](https://github.com/dockersamples/docker-image-demos/assets/313480/886022c8-db3f-41e0-b9b2-dfea6ebebce1)



- Also you can use a Docker contaiener tp verify the architecture

```
docker run --rm mplatform/mquery ajeetraina/demo-buildx:1.0 .
Unable to find image 'mplatform/mquery:latest' locally
latest: Pulling from mplatform/mquery
894bcacb16df: Pull complete
a0c6ee298a93: Pull complete
Digest: sha256:d0989420b6f0d2b929fd9355f15c767f62d0e9a72cdf999d1eb16e6073782c71
Status: Downloaded newer image for mplatform/mquery:latest
Image: ajeetraina/demo-buildx:1.0 (digest: sha256:904f97513d1a99b263ce89ce5ccb55d3ac8bd33ef78abc6c57cf32db52571271)
 * Manifest List: Yes (Image type: application/vnd.oci.image.index.v1+json)
 * Supported platforms:
   - linux/amd64
   - linux/arm64
   - unknown/unknown
```
