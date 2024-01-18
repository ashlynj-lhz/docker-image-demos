## Getting Started with Docker Build with Bake


Docker Build with Bake is a feature within BuildKit that allows you to define and orchestrate multiple Docker image builds using a configuration file, offering more control and flexibility over the build process.

## Benefits of Bake:

- Organization: Manage multiple image builds within a single file, improving clarity and maintainability.
- Reproducibility: Ensure consistent builds across environments by defining all parameters in the configuration file.
- Parallelism: Build images for different platforms concurrently, saving time and resources.
- Flexibility: Customize build processes using variables, conditional logic, and external scripts.
- Integration: Combine Bake with other BuildKit features like build secrets and image signing.


## What is HCL (HashiCorp Configuration Language)?

It's a declarative language used to define build configurations for Bake, a feature within BuildKit that allows you to manage and orchestrate multiple Docker image builds through a configuration file.

Benefits of using HCL for Docker bake:

Clarity and Organization: HCL provides a structured and readable way to define build targets, dependencies, and build instructions, making your configuration easier to understand and maintain.
Flexibility: HCL allows you to leverage various functionalities like variables, conditional logic, and external scripts to tailor your build processes according to specific needs.
Reusability: You can define reusable components and share them across different projects or bake files.
Integration: HCL integrates well with other BuildKit features like multi-arch builds and build secrets.

```
 git clone https://github.com/ajeetraina/docker-image-intro
 cd docker-image-intro/react/
 ```9\\\\0


## Build the images using docker buildx bake:

```
 docker buildx bake --file bake.hcl
```

## Verify if the image is built or not

```
 => [internal] load build context                                                        0.1s
 => => transferring context: 745.96kB                                                      0.1s
 => [2/5] WORKDIR /app                                                              0.2s
 => [3/5] COPY package*.json ./                                                         0.0s
 => [4/5] RUN npm install                                                            8.0s
 => [5/5] COPY . .                                                                0.2s
WARNING: No output specified with docker-container driver. Build result will only remain in the build cache. To push result image into registry use --push or to load image into docker use --load

View build details: docker-desktop://dashboard/build/buildkit-container/buildkit-container0/k2edxxqs8ad2lq4psqopa7i7n
```


## Loading to the Docker

```
 docker buildx bake --file bake.hcl --load
```


```
 => [5/5] COPY . .                                                                                                                               0.2s
 => exporting to docker image format                                                                                                            24.3s
 => => exporting layers                                                                                                                          7.5s
 => => exporting manifest sha256:9c7b0cd4ccfbbde4aed2dddd7d643c198ee507373757a587a8ee5bf51ed77f68                                                0.0s
 => => exporting config sha256:b56bc55259bb0c65ae41a3ab6233ff3e6a0301689682bbe45323f206a2b8da3a                                                  0.0s
 => => sending tarball                                                                                                                          16.8s
 => importing to docker                                                                                                                         10.3s
 => => loading layer d6119018349b 93B / 93B                                                                                                     10.3s
 => => loading layer 374c3fa79fa8 32.77kB / 157.95kB                                                                                            10.2s
 => => loading layer cc46f83f1d38 95.81MB / 95.97MB                                                                                             10.1s
 => => loading layer 8370f49bfa5a 32.77kB / 184.32kB
```

## Tag the image

```
docker tag b56bc55259bb node-app:latest
```

ajeetsraina  react  ➜ ( main)   21.4.0  ♥ 17:51  docker image ls
REPOSITORY                     TAG               IMAGE ID       CREATED         SIZE
node-app                       latest            b56bc55259bb   2 minutes ago   1.4GB
```


