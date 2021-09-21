FROM mysql:8

#定义工作目录
ENV WORK_PATH /usr/local/work

#定义会被容器自动执行的目录
ENV AUTO_RUN_DIR /docker-entrypoint-initdb.d

#定义sql文件名
ENV FILE_0 hoj.sql
ENV FILE_1 nacos.sql
ENV FILE_2 nacos-data.sql

#定义shell文件名
ENV INSTALL_DATA_SHELL run.sh

#定义生成nacos-data.sql的文件名
ENV NACOS_DATA_SHELL bcrypt

ENV NACOS_USERNAME=${NACOS_USERNAME}

ENV NACOS_PASSWORD=${NACOS_PASSWORD}

COPY ./$FILE_0 $WORK_PATH/
COPY ./$FILE_1 $WORK_PATH/
COPY ./$FILE_3 $WORK_PATH/

COPY ./$INSTALL_DATA_SHELL $AUTO_RUN_DIR/
COPY ./bcrypt  $WORK_PATH/

COPY ./mysql.cnf /etc/mysql/conf.d/

RUN chmod a+x $WORK_PATH/bcrypt

RUN echo '' > $WORK_PATH/$FILE_2

RUN chmod +777 $WORK_PATH/$FILE_2

#给执行文件增加可执行权限

RUN chmod a+x $AUTO_RUN_DIR/$INSTALL_DATA_SHELL
