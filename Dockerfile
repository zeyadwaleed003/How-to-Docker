# Specifies the base image for the Docker container, using Node.js version 22.11.0
# U can find different base images in Docker Hub
FROM node:22.11.0

# Sets the working directory inside the container to /app
WORKDIR /app

# Copies the package.json file from the build context to the working directory (/app)
COPY package.json .

# Runs the npm install command to install dependencies listed in package.json
RUN npm install

# Copies all files and directories from the build context to the working directory (/app)
COPY . .

# Documents that the container listens on port 3000 (does not actually publish the port)
EXPOSE 3000

# Specifies the command to run when the container starts, executing npm run dev
CMD ["npm", "run", "dev"]