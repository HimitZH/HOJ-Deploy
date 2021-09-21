FROM arey/mysql-client

COPY ./hoj-update.sql /sql/

COPY ./update.sh /sql/


ENTRYPOINT ["/bin/sh", "/sql/update.sh"]
