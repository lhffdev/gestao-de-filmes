#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH
cd ..

./scripts/pull-image.sh || exit 1

echo " "
echo "========> Iniciando ambiente..."
docker-compose up -d frontend
./scripts/checks-frontend-running-commands.sh || exit 1
docker-compose exec frontend yarn run start --host 0.0.0.0
