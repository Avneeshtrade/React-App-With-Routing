FROM node:14-alpine  AS build-tag

WORKDIR /app

COPY package.json .

RUN npm install

VOLUME ["/app/node_modules"]

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-tag /app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./nginx/myconf.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]