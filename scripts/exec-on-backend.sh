#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH
cd ..

echo " "
echo "========> Abrindo o bash..."
docker-compose exec backend $@
