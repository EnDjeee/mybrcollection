# MyBrCollection

A simple web-app that helps me manage my bluray collection. It's structured as three microservices:
1. the ui service is developed using ReactJS and deployed on a nginx web server 
2. the web service is developed with Spring Boot 2
3. the persistence layer is managed by a MySQL database

## Prerequisites

* Docker
* Docker Compose

## Run

1. git clone https://github.com/EnDjeee/mybrcollection
2. cd .../mybrcollection
3. docker-compose up

After the application is started, it will be available at ``` http://localhost:8079 ```
