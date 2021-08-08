#!/bin/bash

$WORK_PATH/bcrypt --username=$NACOS_USERNAME --password=$NACOS_PASSWORD --filepath=$WORK_PATH/$FILE_2;

sleep 2;

mysql -uroot -p$MYSQL_ROOT_PASSWORD << EOF
system echo '================Start create database hoj====================';
source $WORK_PATH/$FILE_0;
system echo '================Start create database nacos==================';
source $WORK_PATH/$FILE_1;
system echo '================Start insert user into nacos=================';
source $WORK_PATH/$FILE_2;
system echo '=====================Everything is ok!=======================';
EOF
