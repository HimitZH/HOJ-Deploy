#!/bin/sh


mysql -h mysql -uroot -p$MYSQL_ROOT_PASSWORD -e "select version();" &> /dev/null
RETVAL=$?

while [ $RETVAL -ne 0 ]
do
	sleep 3
	mysql -h mysql -uroot -p$MYSQL_ROOT_PASSWORD -e "select version();" &> /dev/null
	RETVAL=$?
done
mysql -uroot -h mysql -p$MYSQL_ROOT_PASSWORD -D hoj -e "source /sql/hoj-update.sql"
echo 'Check whether the `hoj` database has been updated successfully!' 
