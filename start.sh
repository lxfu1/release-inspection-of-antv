#!/usr/bin/env bash
###
 # @version: 0.0.1
 # @Author: fujin
 # @Date: 2020-09-11 15:49:29
 # @LastEditTime: 2021-02-27 17:13:05
### 
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

# project_name=release-inspection-of-antv

cd ../G2Plot

# npm i

echo "\033[49;32m \n******* G2Plot installing *******\n \033[0m"

# npm run dist

echo "\033[49;32m \n******* client building *******\n \033[0m"

cd ../release-inspection-of-antv/client

# npm i

echo "\033[49;32m \n******* client installing *******\n \033[0m"

# npm run build

echo "\033[49;32m \n******* client building *******\n \033[0m"

cd ../server

# npm i

echo "\033[49;32m \n******* server installing *******\n \033[0m"

# npm start

# echo "\033[49;32m \n******* server starting *******\n \033[0m"

# cd ..

# time=$(date "+%Y-%m-%d-%H-%M-%S")

# git checkout -b "${time}"

# git add .

# git commit -m "build"

# git push --set-upstream origin "${time}"

# echo "\033[49;32m \n******* 比对结束，请到 github 上查看，分支：${time} *******\n \033[0m"