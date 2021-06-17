#!/usr/bin/bash
if [ "$RSYNC_MODE" == "master" ]; then
	echo "$RSYNC_USER:$RSYNC_PASSWORD" > /hoj/rsyncd/rsyncd_master.passwd
	chmod 600 /hoj/rsyncd/rsyncd_master.passwd
	rsync --daemon --config=/hoj/rsyncd/rsyncd.conf
else
	echo "$RSYNC_PASSWORD" > /hoj/rsyncd/rsyncd_slave.passwd
	chmod 600 /hoj/rsyncd/rsyncd_slave.passwd
	while true
	do
		rsync -avz --delete --progress --password-file=/hoj/rsyncd/rsyncd_slave.passwd $RSYNC_USER@$RSYNC_MASTER_ADDR::testcase /hoj/testcase >> /hoj/log/rsync_slave.log
		sleep 100
	done
fi
