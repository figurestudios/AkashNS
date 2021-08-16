FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install @nebulous/skynet
RUN npm install dotenv
CMD [ "node", "appstarter.js"]