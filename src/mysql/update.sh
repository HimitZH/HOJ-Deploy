#!/bin/bash

mysqld --user=root --daemonize
sleep 3;
mysql -uroot -p$MYSQL_ROOT_PASSWORD << EOF
system echo '================Start update database hoj====================';
source $WORK_PATH/$FILE_3;
system echo '================update database hoj is ok!===================';
EOF