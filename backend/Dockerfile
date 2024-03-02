# Use a base image with a Java runtime environment
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from your local machine to the container
COPY target/userbackend-0.0.1-SNAPSHOT.jar /app/userbackend.jar

# Define the command to run your application
CMD ["java", "-jar", "userbackend.jar"]