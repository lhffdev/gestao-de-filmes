#!/bin/bash
COLOR_YELLOW='\033[1;49;33m';
COLOR_CLEAN='\033[0m';

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH

echo " "
bash pull-image.sh || exit 1

echo " "
echo -e "${COLOR_YELLOW}========> Iniciando container do backend...${COLOR_CLEAN}"
cd ..
docker-compose up -d backend
bash scripts/checks-backend-running-commands.sh || exit 1

docker-compose exec backend  rm -f tmp/pids/server.pid
docker-compose exec backend  bundle exec bin/rails s -b 0.0.0.0