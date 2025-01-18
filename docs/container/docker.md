### 配置镜像源

`vim /etc/docker/daemon.json`

```json
{
  "registry-mirrors": [
    "https://docker.1panel.live",
    "https://docker.registry.cyou",
    "https://docker-cf.registry.cyou",
    "https://dockercf.jsdelivr.fyi",
    "https://docker.jsdelivr.fyi",
    "https://dockertest.jsdelivr.fyi",
    "https://mirror.aliyuncs.com",
    "https://dockerproxy.com",
    "https://mirror.baidubce.com",
    "https://docker.m.daocloud.io",
    "https://docker.nju.edu.cn",
    "https://docker.mirrors.sjtug.sjtu.edu.cn",
    "https://docker.mirrors.ustc.edu.cn",
    "https://mirror.iscas.ac.cn",
    "https://docker.rainbond.cc"
  ]
}
```

配置完成后重启 docker

### Docker 自定义镜像

#### FROM

>指定所用的基础镜像，dockerfile 的起点

```dockerfile
FROM <image>[:<tar>] [AS <name>]
```

>`<image>`：基础镜像名称，例如 ubunut、openjdk
>
>`<tar>`：可选，指定镜像版本，例如 8-jre-slim
>
>`AS <neme>`：可选，定义多阶段构建中的镜像名称

```dockerfile
FROM openjdk:8-jre-slim
```

#### WORKDIR

>设置容器中的工作目录，后续所有相对路径操作基于此路径

```dockerfile
WORKDIR <path>
```

>`<path>`：工作目录路径，可以是绝对路径或相对路径
>
>如果目录不存在，Docker 会自动创建

```dockerfile
WORKDIR /app
```

#### COAP

>把文件或目录从主机复制到容器中

```dockerfile
COAP <src> <dest>
```

>`<src>`：源路径，可以是文件或目录（相对于上下文路径）
>
>`<dest>`：目标路径，可以是绝对路径或相对路径（基于 WORKDIR）
>
>支持通配符，如 *.txt

```dockerfile
COPY app.jar app.jar
# 将主机中的 app.jar 复制到容器的工作目录 /app/app.jar
```

#### EXPOSE

>声明容器监听的端口，供外部访问

```dockerfile
EXPOSE <port> [<port>/<protocol>]
```

>`<port>`：端口号
>
>`<protocol>`：可选，协议类型（默认为 tcp），可以是 tcp 或 udp

```dockerfile
EXPOSE 8080
```

#### CMD

>指定容器启动时执行的命令

```dockerfile
CMD ["executable", "param1", "param2", ...]
# 推荐 Exec 格式
```

>使用 JSON 数组，每个参数是独立的字符串；不依赖于 Shell，直接调用可执行文件

```dockerfile
CMD ["java", "-jar", "app.jar"]
```

#### ENV

>用于设置环境变量

```dockerfile
ENV MYSQL_ROOT_PASSWORD=root
# MYSQL_ROOT_PASSWORD 是 MySQL 官方镜像提供的一个特殊环境变量，用于设置 MySQL 数据库的 root 用户密码
```

---

#### dockerfile 配置运行 jar 包

```dockerfile
FROM openjdk:8-jre-slim                   
# 使用 Java 运行时精简镜像
WORKDIR /app                              
# 设置容器工作目录为 /app
COPY app.jar app.jar              
# 将 app.jar 复制到 /app
EXPOSE 8080                               
# 声明容器监听 8080 端口
CMD ["java", "-jar", "app.jar"]       
# 启动容器时运行 Java 应用程序
```

#### dockerfile 配置运行 MySQL

```dockerfile
FROM mysql:latest
# 使用最新的 MySQL 镜像运行
ENV MYSQL_ROOT_PASSWORD=root
# 设置 root 用户密码为 root
ENV MYSQL_DATABASE=app
# 自动创建一个名为 app 的数据库
COPY app.sql /docker-entrypoint-initdb.d/
# MySQL 官方镜像初始化机制，容器启动时，自动执行 /docker-entrypoint-initdb.d/ 目录下的 .sql 或 .sh 文件，初始化数据库
EXPOSE 3306
# 声明容器监听 3306 端口
```

#### 构建镜像

```bash
docker build -t my-app .
```

>`docker build`：构建镜像
>
>`-t`：指定目标镜像名称
>
>`.`：指定 dockerfile 所在目录

#### 运行容器

```bash
docker run --rm -d -p 8080:8080 -v /root/app/upload/:/app/upload/ --name app my-app
```

>`docker run`：运行容器实例
>
>`--rm`：容器停止时会自动删除容器
>
>`-d`：后台运行模式
>
>`-p 8080:8080`：端口映射，把容器内部的 8080 映射到主机的 8080 端口
>
>`-v /root/app/upload/:/app/upload/`：用于挂载卷，把主机目录 /root/app/upload 挂载到容器内的 /app/upload 目录；主机上的文件会实时同步到容器，容器生成的文件也会写入主机
>
>`--name app`：给容器指定名称
>
>`my-app`：指定使用的容器名称，Docker 会基于名为 my-app 的容器启动容器