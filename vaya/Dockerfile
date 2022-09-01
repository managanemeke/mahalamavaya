#
FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
# RUN npm install -D sass-loader node-sass sass
# RUN npm rebuild node-sass

CMD ["npm", "run", "serve"]
