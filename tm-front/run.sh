#!/bin/bash

# Depending on the param run either docker dev or docker prod
if [ "$1" = "dev" ]; then
  # Modifier les env à ce moment
  docker-compose -f docker-compose.dev.yml up --build
elif [ "$1" = "prod" ]; then
  docker-compose -f docker-compose.prod.yml up --build
else
  echo "Please provide a valid param"
fi