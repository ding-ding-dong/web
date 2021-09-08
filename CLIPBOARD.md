# ---
sources:

阮一峰
http://www.ruanyifeng.com/blog/atom.xml

HackerNews
https://news.ycombinator.com/rss

酷壳
https://coolshell.cn/feed


# ---

SSL证书来自阿里云证书服务，一年有20个免费证书的额度 1年 2022年9月7日

配置tls：
https://jelly.jd.com/article/6006b1045b6c6a01506c87b5
http://nginx.org/en/docs/http/configuring_https_servers.html

vim /etc/hosts
127.0.0.1 mystist.com

# ---
run docker build之前要run的命令：
需要在local run yarn，node版本为8
PUBLIC_URL=https://mystist.com yarn build

docker build -t ding-ding-dong-web .
production docker run cmd:
docker run -d --name ding-ding-dong-web --restart=always -e NODE_ENV=production -p 443:443 ding-ding-dong-web

localhost docker run cmd:
docker run -it --rm --name ding-ding-dong-web -p 443:443 --net=host ding-ding-dong-web

# ---
nginx的配置要自己理解，网上的资料太乱

主要配置解释：
location / {
    root /app;
    try_files $uri /index.html;
    return 701 # for debug
}
location /api/ {
    proxy_pass http://172.17.0.1:8080/api/;
    return 702 # for debug
}

location主要是匹配request的url，可以通过return 701等数字调试
location里面的root，是指定源文件的path，所以通常是项目的public folder的根目录，也就是index.html所在的位置
root默认是html，即nginx二进制文件所在的path
proxy_pass是配置反向代理，即后端server的path，会将location /api/匹配的网址直接替换为proxy_pass的值（注意：本地的docker ip地址为172.17.0.1，ecs上的为172.18.0.1）
