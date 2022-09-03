#!/bin/bash

docker build --rm=true --force-rm=true -t vaya ./vaya
#
# docker run -p 81:80 -p 444:443 \
  # -v ./web:/home/aurora/web:ro \
  # -v ./app:/home/aurora/app:ro \
  # netureso:latest
#
docker-compose up --build -d
#
echo ""
echo "check this:"
echo "http://localhost:9003"
echo "to stop run:"
echo "sudo ./na.sh"
echo "or"
echo "sudo docker-compose down"
