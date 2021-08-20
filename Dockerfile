FROM node:14

ENV NODE_ENV production
ENV USING_DOCKER true

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production
COPY src/ ./src

EXPOSE 3000
ENTRYPOINT npm run debug