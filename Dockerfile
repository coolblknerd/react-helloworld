FROM node:latest

# Update & Install React
RUN apt-get update && \
    npm i -g create-react-app 

COPY . /app

WORKDIR /app

CMD ["npm", "start"]

EXPOSE 3000