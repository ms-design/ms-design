#!/bin/bash
set -e

if [[ -z $1 ]]; then
  read -p "Enter new version: " VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/Y/n/N) " AGREE
read -p ""
if [[ $AGREE =~ ^[yY]$ ]]; then
  echo "Releasing $VERSION ......"
  ./node_modules/.bin/conventional-changelog -p angular -i CHANGELOG.md -s -r 0
  yarn run test
  yarn run build:lib
  git add -A
  git commit -m "build: build $VERSION"
  git push origin refs/tags/v"$VERSION"
  git push
  if [[ -z $RELEASE_TAG ]]; then
    npm publish
  else
    npm publish --tag "$RELEASE_TAG"
  fi
fi