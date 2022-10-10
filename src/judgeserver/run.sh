ulimit -s unlimited

chmod +777 SandBox

if test -z "$PARALLEL_TASK";then
	nohup ./SandBox --silent=true --file-timeout=5m &
	echo -e "\033[42;34m ./SandBox --silent=true --file-timeout=5m \033[0m"
elif [ -z "$(echo $PARALLEL_TASK | sed 's#[0-9]##g')" ]; then
	nohup ./SandBox --silent=true --file-timeout=5m --parallelism=$PARALLEL_TASK &
	echo -e "\033[42;34m ./SandBox --silent=true --file-timeout=5m --parallelism=$PARALLEL_TASK \033[0m"
else
	nohup ./SandBox --silent=true --file-timeout=5m &
	echo -e "\033[42;34m ./SandBox --silent=true --file-timeout=5m \033[0m"
fi

if test -z "$JAVA_OPTS";then
	java -XX:+UseG1GC -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
else
	java -XX:+UseG1GC $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
fi 
