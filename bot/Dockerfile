FROM node:18-alpine3.16

WORKDIR /usr/bot

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

COPY . .
CMD ["node", "build/bot.js"]