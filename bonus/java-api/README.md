# Java API
This is a spring boot application to serve json

## Getting started
```bash
# Install dependencies
mvn install
# Start application on 8080
java -jar target/*.jar
```

## Docker
```bash
# Build
docker build -t java-api .
# Run for local machine
docker run -it --rm --name java-api --network="host" java-api
```