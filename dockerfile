FROM node:18 AS node
WORKDIR /home/app
COPY . .
RUN npm install
RUN npm run build --configuration=production

FROM nginx:latest
COPY --from=node /home/app/dist/frontend /usr/share/nginx/html
