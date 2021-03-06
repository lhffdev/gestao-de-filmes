#!/bin/bash
COLOR_YELLOW='\033[1;49;33m';
COLOR_CLEAN='\033[0m';

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH
cd ..

echo " "
echo -e "${COLOR_YELLOW}========> Desativando sup web...${COLOR_CLEAN}"
docker-compose exec backend rake sup:sup_web_ativado:desativar

