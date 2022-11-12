FROM node:16.8

COPY . .


RUN npm i
RUN npm run build


CMD ["npm", "run", "start:prod"]
