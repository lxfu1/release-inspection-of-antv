#!/usr/bin/env bash
export PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin::/usr/local/bin
# set -e;

echo $PATH

# project_name=release-inspection-of-antv
# time=$(date "+%Y%m%d-%H%M%S")
# echo "-------------------${project_name=}--------------------"

cd ../G2Plot

tnpm i

echo "\033[49;32m \n******* G2Plot installing *******\n \033[0m"

tnpm run dist

echo "\033[49;32m \n******* client building *******\n \033[0m"

cd ../release-inspection-of-antv/client


tnpm i

echo "\033[49;32m \n******* client installing *******\n \033[0m"

tnpm run build

echo "\033[49;32m \n******* client building *******\n \033[0m"

cd ../server

tnpm i

echo "\033[49;32m \n******* server installing *******\n \033[0m"

tnpm start

echo "\033[49;32m \n******* server starting *******\n \033[0m"