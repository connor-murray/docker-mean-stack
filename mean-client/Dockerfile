### STAGE 1: Configure node environment ###
FROM node:8.6 as node

## Create working directory
WORKDIR /ng-app

## Copy package.json and yarn.lock
COPY package.json yarn.lock /ng-app/

## Install dependecies
RUN yarn install --silent

## Copy application accross
COPY ./ /ng-app/

## Build client (binaries into ./dist)
RUN yarn run build

### STAGE 2: Configure nginx ###
FROM nginx:1.13.3

## Replace nginx config with our own
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## Copy out built dist application to nginx directory as static files
COPY --from=node /ng-app/dist /usr/share/nginx/html

## Start nginx
CMD ["nginx", "-g", "daemon off;"]
