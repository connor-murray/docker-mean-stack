# Docker Mean Stack

An Angular 5 application in the first Docker container that points to an ExpressJS API a second Docker container, which connects to MongoDB in third Docker container.

## Docker File
Each project contains its own docker file which enables them to be run up individually.

## Docker Compose
The project contains a Docker Compose file to link and controll our multi-container application;

- Build the images, create and start the containers and keep them running in background:`docker-compose up -d --force-recreate --build`
- Stop and remove the containers: `docker-compose down --rmi all`