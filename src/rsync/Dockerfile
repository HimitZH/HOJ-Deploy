FROM ubuntu:18.04

RUN apt-get update && apt-get -y install rsync

RUN mkdir -p /hoj/rsyncd

COPY run.sh /hoj/rsyncd/run.sh

COPY rsyncd.conf /hoj/rsyncd/rsyncd.conf

CMD /bin/bash /hoj/rsyncd/run.sh && tail -f /dev/null