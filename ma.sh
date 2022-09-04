#!/bin/bash

docker build --rm=true --force-rm=true -t vaya ./vaya
#
docker-compose up --build -d
#
docker-compose exec vaya /bin/sh -c '\
  npm install'
#
docker-compose exec vaya /bin/sh
#
