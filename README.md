# shopping-cart
API that calculate the total amount to be pay from a sell 

# Docker

Dockerfile

```
FROM node:8.11.1
RUN git clone https://github.com/KiviKong/shopping-cart.git
EXPOSE 8080
WORKDIR shopping-cart
RUN npm install
CMD ["npm", "start"]
```

docker-composer.yml

```
version: '2'

services:
  shopping-cart:
    build: .
    ports:
      - 8080:8080
    environment:
      - APP_PORT=8080
```
