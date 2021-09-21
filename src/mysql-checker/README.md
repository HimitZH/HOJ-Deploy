alter user 'root'@'localhost' identified by '123456' password expire never;  

# 修改加密规则

 ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';  

# 修改密码

#  flush privileges;