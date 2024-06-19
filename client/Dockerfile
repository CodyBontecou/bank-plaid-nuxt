FROM node:20.11.1-alpine


COPY ["package.json", "/opt/client/"]
COPY ["package-lock.json", "/opt/client/"]

WORKDIR /opt/client

RUN npm ci

COPY [".", "/opt/client/src/"]

CMD ["npm", "run", "dev"]
