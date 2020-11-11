FROM node:14-slim

WORKDIR /usr/src/app

COPY    /package*.json ./

RUN npm install

COPY . .

# Change default user to non-root user
USER node 

ENV PORT=3000

EXPOSE 8080

CMD ["npm","start"]