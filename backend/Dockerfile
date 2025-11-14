FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV NODE_ENV=production
ENV UPLOAD_DIR=uploads

RUN mkdir -p /app/uploads

EXPOSE 5000
CMD ["node", "server.js"]
