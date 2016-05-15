FROM node:4.4.0
RUN npm install -g grunt-cli yo generator-karma \
generator-angular bower
WORKDIR /app
EXPOSE 3000
