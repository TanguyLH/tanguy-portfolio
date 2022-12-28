FROM node:16-alpine

RUN mkdir -p /home/app/frontend
WORKDIR /home/app/frontend

COPY package*.json ./

RUN if [ $(arch) == "aarch64" ]; \
    then \
        apk add --no-cache --virtual .build-deps make gcc g++ python3; \
        npm ci; \
        apk del .build-deps; \
    else \
        npm ci; \
    fi
# RUN npm install