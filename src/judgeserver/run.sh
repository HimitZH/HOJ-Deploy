
chmod +777 SandBox

nohup ./SandBox -release=true &

java -XX:+UseG1GC -Djava.security.egd=file:/dev/./urandom -jar ./app.jar 
