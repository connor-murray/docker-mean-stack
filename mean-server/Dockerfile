### STAGE 1: Configure node environment ###
FROM node:8.6 as node

## Create ng-app & dist directories
RUN mkdir /server

## Change directory so that our commands run inside this new directory
WORKDIR /server

## Copy dependency definitions
COPY package.json /server

## Install dependecies
RUN yarn install --silent

## Get all the code needed to run the app
COPY . /server

## Expose the port the app runs in
EXPOSE 3000

## Serve the app
CMD ["yarn", "start"]
