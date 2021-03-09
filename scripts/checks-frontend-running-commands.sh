#!/bin/bash
# Interpreter identifier

function onSuccess() {
  docker-compose logs --tail=3 | egrep -i "success|done in "
}

function onError() {
  docker-compose logs --tail=3 | grep "error"
}

function running-entrypoint() {
  docker-compose top frontend | egrep -o docker-entrypoint.sh
}

echo ""
echo ""

function waitUntilServiceIsReady() {
  processName=$1
  attempt=1

  while [ ! -z $(running-entrypoint) ]; do
    echo "Waiting for ${processName}... (attempt: $((attempt++)))"
    sleep 5
  done

  if $2; then
    echo "${processName} succeeded!"
  elif $3; then
    echo "${processName} error!"
    exit 1
  fi
}

waitUntilServiceIsReady "yarn install" onSuccess onError

echo ""
echo ""
