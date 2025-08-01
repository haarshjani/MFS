
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine AS production

RUN apk add --no-cache nodejs npm

RUN apk add --no-cache supervisor

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html


COPY data/db.js /app/data/db.js


RUN npm install -g json-graphql-server

COPY supervisor/supervisord.conf /etc/supervisord.conf

EXPOSE 80
EXPOSE 8090

# Command to run Supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
