# Docker Tutorial

This is a straightforward guide on using Docker.

## Docker Commands

Below are the essential Docker commands to build, run, and manage your application.

### 1. Build the Docker Image

Builds the Docker image from Dockerfile.

```bash
docker build -t (name:version) .
```

### 2. View Docker images

This command lists all Docker images stored on your local machine.

```bash
docker images
```

### 3. Run Docker Container

Runs a container from a built image, mapping port 3000 on your host to port 3000 in the container.

```bash
docker run -p 3000:3000 --name (container_name) (image_name)
```

- `-p 3000:3000` Maps port 3000 on your host to port 3000 in the container.

### 4. Run in Detached Mode

Run the container in the background (detached mode).

```bash
docker run -d -p 3000:3000 --name (container_name) (image_name)
```

### 5. View Running Containers

List all running containers to check the status of your app.

```bash
docker ps
```

To include stopped containers, use:

```bash
docker ps -a
```

### 6. Stop a Running Container

Stop the container when you’re done.

```bash
docker stop (container_name)
```

### 7. Start a Stopped Container

Restart a previously stopped container.

```bash
docker start (container_name)
```

### 8. Remove a Container

Delete the container when no longer needed.

```bash
docker rm (container_name)
```

### 9. Force Remove a Container

Stop the container if it is running then remove it.

```bash
docker rm (container_name) -f
```

### 10. Access the Container’s Shell

Open a shell inside the running container for debugging or manual commands.

```bash
docker exec -it (container-name) bash
```

## FAQ

- **Why did I split the "package.json" copy command?**

  To reduce build time by reusing installed dependencies when only my code changes, thanks to Docker's caching. If you didn't copy package.json separately, Docker would rebuild and reinstall dependencies every time any file changes, slowing down the build process.
