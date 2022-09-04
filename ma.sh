#!/bin/bash

docker build --rm=true --force-rm=true -t vaya ./vaya
#
docker-compose up --build -d
#
docker-compose exec vaya /bin/sh -c '\
  npm install'
#
docker-compose exec vaya /bin/sh -c '\
  nohup npm run serve >> app.log 2>&1 &'
#
echo ""
echo "check this:"
echo "http://localhost:9003"
echo "to stop run:"
echo "sudo ./na.sh"
echo "or"
echo "sudo docker-compose down"
