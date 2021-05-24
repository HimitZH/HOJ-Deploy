#!/bin/bash
if test -z "$JAVA_OPTS";then
	java -Djava.security.egd=file:/dev/./urandom -jar  /app.jar
else
	java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar  /app.jar
fi