---
title: linux
date: 2021-6-29
tags:
 - linux
categories:
 -  linux
---
# linux总结

## 配置虚拟机网卡

 #####  root身份 

 #####  `su root`

##### 查看网卡配置 

`ifconfig`

##### 进入网卡配置文件目录 

##### `cd /etc/sysconfig/network-scripts/`

##### 查看全部网卡

##### ` ls`

##### 编辑配置

`vi ifcfg-ens33`

```
## 参数解释
##TYPE:网络类型
##BOOTPROTO：地址分配模式
##NAME：网卡名臣
##ONBOOT：是否开机自动重启网卡
##IPADDR：IP地州
##NETMADK：子网掩码
##GATEWAY：网关地址
##DNS1：DNS地址
```

##### 重启网卡

`systemctl restart network`

## 更改运行级别

`init 2`

## 关闭防火墙

`systemctl stop firewalld`
### 查看防火墙状态
`systemctl status firewalld`

## 关闭selinux

### 临时关闭

`setenforce  0`

### 永久关闭

```
vi /etc/selinux/config
SELINUX=disabled
```

### 校验是否更改成功

`getenforce`

## 创建分区

## 主分区

#### 优先查看分区情况

`fdisk -l`

#### 在指定硬盘上创建主分区

`fdisk /dev/sdb`

`n`

#### 选择主分区

`primary`

#### 初始扇形分区默认2048

#### 后续大小

`+100G`

### 逻辑分区

#### 注意：

逻辑分区只能在拓展分区上创建，优先创建拓展分区，且拓展分区有且只有一个

#### 创建拓展分区

`n`

#### 选择拓展分区

`extend`

#### 创建逻辑分区

```
n
logical
```

分配容量同上
#### 全部操作完成后需要按w保存写入并退出

## 文件系统

###  格式化文件系统

```
mkfs语法：mkfs -t   文件系统类型    分区名字
es: mkfs -t ext3 /dev/sdb1
```

### 挂载

```
mount  分区  指定目录
mount /dev/sdc1 /mnt
```

### 创建目录

#### 到刚才挂载的目录进行再创建目录

```
cd /mnt
mkdir xwl113 

```

### 为目录添加权限并粘滞

```
chmod a+r+w+x+t
```

## 创建新用户并指定家目录

```
useradd -d /mnt/xwl113 -m xwl113
```

## 为新用户添加密码

`passwd xwl113`

## 配置web服务器

- 安装httpd

  ```
  yum install -y httpd
  ```

  - 检验httpd是否成功安装
  - `rpm -qa | grep httpd`

- 修改其网站文档目录为新建用户的家目录

  - ```
    vi /etc/httpd/conf/httpd.conf
    ```

  - 找到documentRoot 将其修改为你的自定义目录

  - 将紧在其下的directive 路径也改为它，其他不要动

- 修改端口，防止被占用

  - ```
    vi /etc/httpd/conf/httpd.conf
    ```

  - 找到listen 80，将80改为8080

- 启动httpd

  - `service httpd start`

- 查看端口情况

  - `netstat -lnptu`

- 关闭防火墙和selinux

- 重新启动httpd

  - `service httpd restart`

- 如果还是出现无权限访问的问题

- 那么更改http.conf里的directive中的Require All granted

- 区分httpd 2.2版本和2.4版本的访问控制

- allow from all，Require All granted

- 接着把目录权限改为全开，把目录和文件的属主和属组改为root

- ```
  chmod 777 目录或文件
  ```

- ```
  chown root: 目录或文件
  ```

## 文件传输

### 从本机向虚拟机内传文件

- 借助putty安装包文件，必须是安装包！

  - 找到putty安装路径

  - ```
    windos下 C:\Program Files\PuTTY
    ```

  - 找到psftp.exe文件

  - 通过它传输文件

  - 优先连接

  - ```
    open 虚拟机ip
    ```

  - 进入里面通过cd 操作虚拟机路径

  - 通过lcd 操作本机路径

  - 通过put上传，将本机路径下指定文件上传给虚拟机指定路径

  - 如：本机路径下有个xwl113.jpg

  - put xwl113.jpg

  - 那么虚拟机目录下多出一个xwl113.jpg文件

  - get反着来，虚拟机传给本机文件

  - 注意：查看图片文件

  - ```
    eog xwl113.jpg
    ```

  - 

## 创建网页文件

```
touch index.html
```

必须是这个名字

里面就写html的代码，也可以理解为标签






























