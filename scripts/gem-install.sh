#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPT_PATH
cd ..
docker-compose exec backend bundle check || bundle install --binstubs="$BUNDLE_BIN"