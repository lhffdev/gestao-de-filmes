#!/bin/bash

echo " "
echo "========> Iniciando console..."
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH
cd ..
docker-compose exec backend rails c
