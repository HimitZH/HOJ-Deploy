ulimit -s unlimited

chmod +777 Sandbox-amd64
chmod +777 Sandbox-arm64

get_arch=`arch`

file="Sandbox-amd64"

if [[ $get_arch =~ "x86_64" ]];then
    file="Sandbox-amd64"
elif [[ $get_arch =~ "aarch64" ]];then
    file="Sandbox-arm64"
else
	file="Sandbox-amd64"
    echo "!!!Warning: the security sandbox [go-judge] of judgeserver only supports the linux systems of amd64 and arm64, but the current system architecture is $get_arch."
    echo "!!!Warning: So now the amd64 version is used by default, and may cause the security sandbox [go-judge] to fail to start normally!"
fi

if test -z "$PARALLEL_TASK";then
	nohup ./$file --silent=true --file-timeout=5m &
	echo -e "\033[42;34m ./$file --silent=true --file-timeout=5m \033[0m"
elif [ -z "$(echo $PARALLEL_TASK | sed 's#[0-9]##g')" ]; then
	nohup ./$file --silent=true --file-timeout=5m --parallelism=$PARALLEL_TASK &
	echo -e "\033[42;34m ./$file --silent=true --file-timeout=5m --parallelism=$PARALLEL_TASK \033[0m"
else
	nohup ./$file --silent=true --file-timeout=5m &
	echo -e "\033[42;34m ./$file --silent=true --file-timeout=5m \033[0m"
fi

if test -z "$JAVA_OPTS";then
	java -XX:+UseG1GC -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
else
	java -XX:+UseG1GC $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
fi 
