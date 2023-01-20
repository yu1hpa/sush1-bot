FROM node:18-alpine3.16

WORKDIR /usr/src/bot
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

COPY . .
CMD ["yarn", "build"]
CMD ["node", "build/bot.js"]