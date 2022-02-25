## 前言

当前文件夹为打包`hoj-judgeserver`镜像的相关文件，将这些文件复制到同一个文件夹内，**然后打包[JudgeServer](https://gitee.com/himitzh0730/hoj/tree/master/hoj-springboot/JudgeServer)（SpringBoot项目）成jar包也放到当前文件夹**，之后执行以下命令进行打包成镜像.

```shell
docker build -t hoj-judgeserver .
```

或者直接下载本项目，进入到当前文件夹执行打包命令

```shell
git clone https://gitee.com/himitzh0730/hoj-deploy.git && cd hoj-deploy/src/judgeserver

docker build -t hoj-judgeserver .
```



docker-compose 启动

```yaml
version: "3"
services:

  hoj-judgeserver:
#    image: registry.cn-shenzhen.aliyuncs.com/hcode/hoj_judgeserver
	image: hoj-judgeserver
    container_name: hoj-judgeserver
    restart: always
    volumes:
      - ./judge/test_case:/judge/test_case
      - ./judge/log:/judge/log
      - ./judge/run:/judge/run
      - ./judge/spj:/judge/spj
      - ./judge/log/judgeserver:/judge/log/judgeserver
    environment:
      - TZ=Asia:/Shanghai
      - PARALLEL_TASK=default # 默认沙盒并行判题数为cpu核心数
      - JUDGE_SERVER_IP=your_judgeserver_ip # 判题服务所在的ip
      - JUDGE_SERVER_PORT=8088 # 判题服务启动的端口号
      - JUDGE_SERVER_NAME=hoj-judger-1 # 判题服务名字，多个判题服务请使用不同
      - NACOS_URL=172.20.0.4:8848 # nacos的url
      - NACOS_USERNAME=nacos # nacos的管理员账号
      - NACOS_PASSWORD=nacos # naocs的管理员账号密码
      - MAX_TASK_NUM=-1 # -1表示最大并行任务数为cpu核心数*2
      - REMOTE_JUDGE_OPEN=true # 当前判题服务器是否开启远程虚拟判题功能
      - REMOTE_JUDGE_MAX_TASK_NUM=-1 # -1表示最大并行任务数为(cpu核心数*2)*2
    ports:
      - "0.0.0.0:8088:8088"
      # - "0.0.0.0:5050:5050" # 一般不开放安全沙盒端口
    privileged: true # 设置容器的权限为root
```



## 文件介绍

### 1. SandBox

go语言写的判题安全沙盒，基于cgroup权限控制，高性能可复用沙箱。

### 2.  check_nacos.sh

用于检测nacos是否启动完成，然后再执行启动judgeserver

```shell
#!/bin/bash

while :
    do
        # 访问nacos注册中心，获取http状态码
        CODE=`curl -I -m 10 -o /dev/null -s -w %{http_code}  http://$NACOS_URL/nacos/index.html`
        # 判断状态码为200
        if [[ $CODE -eq 200 ]]; then
            # 输出绿色文字，并跳出循环
            echo -e "\033[42;34m nacos is ok \033[0m"
            break
        else
            # 暂停1秒
            sleep 1
        fi
    done

# while结束时，执行容器中的run.sh。
bash ./run.sh
```

### 3. run.sh

启动judgesever的springboot jar包 和SandBox判题安全沙盒

```shell

chmod +777 SandBox

nohup ./SandBox -release=true &

java -XX:+UseG1GC -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
```

### 4. Dockerfile

```dockerfile
FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Shanghai

RUN buildDeps='software-properties-common libtool wget unzip' && \
    apt-get update && apt-get install -y python python3.7 gcc g++ mono-devel $buildDeps curl bash && \
    add-apt-repository ppa:openjdk-r/ppa && add-apt-repository ppa:longsleep/golang-backports && apt-get update && apt-get install -y golang-go openjdk-8-jdk && \
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

```



