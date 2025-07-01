# Specifies the base image for the Docker container, using Node.js version 22.11.0
# U can find different base images in Docker Hub
FROM node AS base

# Sets the working directory inside the container to /app
WORKDIR /app

# Copies the package.json file from the build context to the working directory (/app)
COPY package.json .

FROM base AS development

# Runs the npm install command to install dependencies listed in package.json
RUN npm i

# Copies all files and directories from the build context to the working directory (/app)
COPY . .

# Documents that the container listens on port 3000 (does not actually publish the port)
EXPOSE 3000

# Specifies the command to run when the container starts, executing npm run dev
CMD ["npm", "run", "dev"]

###############################################################################

# This is the builder stage. Docker automatically removes it after the build is complete 
FROM base AS builder

RUN npm i

COPY . .

RUN npm run build

###############################################################################

FROM base AS production

# Only install the production packages
RUN npm i --only=production 

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]