#!/usr/bin/env bash
###
 # @version: 0.0.1
 # @Author: fujin
 # @Date: 2020-09-11 15:49:29
 # @LastEditTime: 2021-02-26 14:22:03
### 
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

# project_name=release-inspection-of-antv
# time=$(date "+%Y%m%d-%H%M%S")
# echo "-------------------${project_name=}--------------------"

cd ../G2Plot

npm i

echo "\033[49;32m \n******* G2Plot installing *******\n \033[0m"

npm run dist

echo "\033[49;32m \n******* client building *******\n \033[0m"

cd ../release-inspection-of-antv/client

npm i

echo "\033[49;32m \n******* client installing *******\n \033[0m"

npm run build

echo "\033[49;32m \n******* client building *******\n \033[0m"

cd ../server

npm i

echo "\033[49;32m \n******* server installing *******\n \033[0m"

npm start

echo "\033[49;32m \n******* server starting *******\n \033[0m"