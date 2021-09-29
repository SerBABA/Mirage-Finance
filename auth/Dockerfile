FROM node as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node
RUN apt update && apt install -y build-essential && apt-get install -y libc6

WORKDIR /app
COPY package*.json ./
# required by aragon2
RUN npm install -g node-gyp

RUN npm install --production

COPY --from=builder /app/dist ./dist

COPY ormconfig.js /app/ormconfig.js
COPY ./docker.env /app/.env

EXPOSE 2999
CMD ["npm", "run", "start"]