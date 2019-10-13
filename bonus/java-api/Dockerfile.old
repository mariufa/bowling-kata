FROM openjdk:8-jre-alpine

RUN apk --no-cache add curl

WORKDIR /opt/app

HEALTHCHECK --interval=10s CMD curl --fail http://localhost:8080/healthy || exit 1 

COPY target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]