# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG UNIT_VERSION=1.31.0-php8.2

FROM unit:${UNIT_VERSION}

WORKDIR /usr/share/unit

# Copy the rest of the source files into the image.
COPY ./src ./
COPY config.json /docker-entrypoint.d 


# Expose the port that the application listens on.
EXPOSE 80

# Run the application.
CMD ["unitd", "--no-daemon", "--control", "0.0.0.0:9000"]
