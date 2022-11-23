FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Shanghai

RUN buildDeps='software-properties-common libtool wget unzip' && \
    apt-get update && apt-get install -y python python3.7 mono-devel $buildDeps curl bash && \
    add-apt-repository ppa:openjdk-r/ppa && add-apt-repository ppa:longsleep/golang-backports && add-apt-repository ppa:ubuntu-toolchain-r/test && \
	apt-get update && apt-get install -y golang-go openjdk-8-jdk gcc-9 g++-9 && \
    update-alternatives --install  /usr/bin/gcc gcc /usr/bin/gcc-9 40 && \
    update-alternatives --install  /usr/bin/g++ g++ /usr/bin/g++-9 40 && \
	add-apt-repository ppa:pypy/ppa && apt-get update && apt install -y pypy pypy3 && \
	add-apt-repository ppa:ondrej/php && apt-get update && apt-get install -y php7.3-cli && \
	cd /tmp && wget -O jsv8.zip  https://storage.googleapis.com/chromium-v8/official/canary/v8-linux64-dbg-8.4.109.zip && \
	unzip -d /usr/bin/jsv8 jsv8.zip && rm -rf /tmp/jsv8.zip && \
	curl -fsSL https://deb.nodesource.com/setup_14.x | bash && \
	apt-get install -y nodejs && \
    apt-get purge -y --auto-remove $buildDeps && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /judge/test_case /judge/run /judge/spj /judge/log

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY *.jar /judge/server/app.jar

COPY run.sh /judge/server/run.sh

COPY check_nacos.sh /judge/server/check_nacos.sh

COPY testlib.h /usr/include/testlib.h

ADD SandBox /judge/server/SandBox	
	
WORKDIR /judge/server

ENTRYPOINT ["bash", "./check_nacos.sh"]

EXPOSE 8088

EXPOSE 5050