#!/bin/bash

function onSuccess() {
  docker-compose logs --tail=15 | egrep "The Gemfile's dependencies are satisfied|Bundled gems are installed into"
}

function onError() {
  docker-compose logs --tail=3 | grep "error"
}
echo ""
echo ""

function running-entrypoint() {
  docker-compose top backend | egrep -o docker-entrypoint.sh
}

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

waitUntilServiceIsReady "gem install" onSuccess onError

echo ""
echo ""
