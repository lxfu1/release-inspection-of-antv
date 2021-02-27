#!/usr/bin/env bash
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

# project_name=release-inspection-of-antv

# cd ../G2Plot

# echo "\033[49;32m \n******* G2Plot installing *******\n \033[0m"

# npm i

# echo "\033[49;32m \n******* client building *******\n \033[0m"

# npm run dist

cd ./release-inspection-of-antv/client

echo "\033[49;32m \n******* client installing *******\n \033[0m"

npm i

echo "\033[49;32m \n******* client building *******\n \033[0m"

npm run build

cd ../server

echo "\033[49;32m \n******* server installing *******\n \033[0m"

npm i

echo "\033[49;32m \n******* server starting *******\n \033[0m"

npm start

# cd ..

# time=$(date "+%Y-%m-%d-%H-%M-%S")

# git checkout -b "${time}"
