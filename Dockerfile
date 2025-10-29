FROM node:18-bullseye-slim AS build

WORKDIR /app

RUN corepack enable && corepack prepare yarn@1.22.19 --activate

COPY package.json yarn.lock lerna.json ./
COPY packages ./packages
COPY standalone-packages ./standalone-packages
COPY babel.config.js ./
COPY Gulpfile.js ./
COPY . .

RUN yarn install --frozen-lockfile \
  && yarn build:deps \
  && yarn build:sandpack

FROM nginx:1.25.3-alpine

COPY --from=build /app/www /usr/share/nginx/html
COPY .github/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
