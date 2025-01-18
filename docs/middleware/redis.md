### 允许外部连接

修改 **redis.conf** 配置文件

```
# 让 Redis 监听所有网络接口
bind 0.0.0.0

# 禁用保护模式（默认启用时，外部访问会被拒绝）
protected-mode no
```

运行

```bash
redis-server /redis.conf
```