
chmod +777 SandBox

nohup ./SandBox --silent=true --file-timeout=2m &

if test -z "$JAVA_OPTS";then
	java -XX:+UseG1GC -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
else
	java -XX:+UseG1GC $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
fi 