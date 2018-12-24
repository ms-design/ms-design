#!/bin/bash
yarn run codecov --token=${CODECOV_TOKEN}
if [[ ${TRAVIS_BRANCH} == 'master' ]];
then
  cd docs/.vuepress/dist
  git init
  git config user.name 'pyyzcwg2833'
  git config user.email 'pyyzcwg2833@outlook.com'
  git add -A
  git commit -m "update documents by travis-ci with build ${TRAVIS_BUILD_NUMBER}"
  git push --force "https://${GH_TOKEN}@${GH_REF}" master:master
fi
