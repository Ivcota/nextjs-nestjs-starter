FROM node:lts-alpine as base

FROM base as dev
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8080 
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]


FROM base as prod
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080 
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
