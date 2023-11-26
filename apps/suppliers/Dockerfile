FROM node:alpine as development

WORKDIR /usr/src/app

COPY package.json ./

RUN  npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR  /usr/src/app

COPY package.json ./

RUN  npm install --prod --legacy-peer-deps

COPY --from=development /usr/src/app/dist ./dist

CMD ["node","dist/apps/suppliers/main"]