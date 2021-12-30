### Repair Materials Management (RMM) - POC

## STAGE 1
# FROM node as node
# LABEL author="Dan Overholt"
# WORKDIR /app
# COPY package.json package.json
# RUN yarn install
# COPY . .
# RUN npm run build -- --configuration production

## STAGE 2
FROM nginx:alpine
VOLUME /var/cache/nginx
#COPY --from=node /dist/rmm-web-host /usr/share/nginx/html
COPY /dist/rmm-web-host /home/www/host
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf