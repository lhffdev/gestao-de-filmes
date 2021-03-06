#!/bin/bash
COLOR_YELLOW='\033[1;49;33m';
COLOR_CLEAN='\033[0m';

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH

echo " "
echo -e "${COLOR_YELLOW}========> Finalizando 0 container do frontend...${COLOR_CLEAN}"
cd ..
docker-compose stop frontend