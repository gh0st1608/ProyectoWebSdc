FROM node:latest as node
WORKDIR /app
COPY Frontend-Angular/appsdc/ /app/
RUN npm install --legacy-peer-deps
#RUN npm install -g @angular/cli
RUN npm run build --prod


FROM nginx:1.13.8-alpine
COPY --from=node /app/dist/appsdc /usr/share/nginx/html/
COPY Frontend-Angular/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY Frontend-Angular/certs/nginx.crt /etc/ssl/
COPY Frontend-Angular/certs/nginx.key /etc/ssl
CMD ["nginx", "-g", "daemon off;"]
