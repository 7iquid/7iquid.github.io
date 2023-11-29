#!/bin/bash

# nuxi generate



if [ ! -d '.portfolio' ]; then
  echo 'creating: folder .portfolio'
  mkdir .portfolio && cd .portfolio
  git clone https://github.com/7iquid/7iquid.github.io.git
  cd 7iquid.github.io
else
  cd .portfolio
  cd 7iquid.github.io && git pull origin main
fi

cp -r ../../.output/public/* .


if [[ -n $(git diff --exit-code) ]]; then
  echo 'git push: folder .portfolio'
  git add . && git commit -m 'Update portfolio From nuxt' 
  source ../../.env
  git remote set-url origin "https://USERNAME:${Tokken}@github.com/7iquid/7iquid.github.io.git" && git push -u origin main
  git push -u origin main
else
  echo "No changes to commit. Skipping git push."
fi
