# app-demo-vcd
Demo vcd

Env ubuntu16

Custom script **web**:
```
echo "nameserver 8.8.8.8" > /etc/resolv.conf
> /etc/apt/apt.conf
apt-get -y update
apt-get -y install nginx
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
apt-get install -y nodejs

echo '* *  * * *  root  echo "{ \"name\": \"`cat /etc/hostname`\" }" >/var/www/html/hostname.json'  > /etc/cron.d/hostname-info
echo '* *  * * *  root  sleep 30 && echo "{ \"name\": \"`cat /etc/hostname`\" }" >/var/www/html/hostname.json'  >> /etc/cron.d/hostname-info
```

On devel vm add this:
```
ln -s /usr/bin/nodejs /usr/local/bin/node
npm install -g @angular/cli
```

On devel vm, create a personnal account and work whith it
```
useradd odraghi -m -s /bin/bash
su - odraghi
```


Custom script **back**:
```
echo "nameserver 8.8.8.8" >> /etc/resolv.conf

> /etc/apt/apt.conf

apt-get -y update

apt-get -y install nginx

echo "* *  * * *  root  lsblk -bJSo NAME,SIZE > /var/www/html/lsblk.json"  > /etc/cron.d/lsblk-info
echo "* *  * * *  root  sleep 30 && lsblk -bJSo NAME,SIZE > /var/www/html/lsblk.json"  >> /etc/cron.d/lsblk-info

echo "* *  * * *  root  [ -f /sys/class/block/sdb/device/rescan ] && echo 1 > /sys/class/block/sdb/device/rescan" >> /etc/cron.d/lsblk-info
echo "* *  * * *  root  sleep 30 && [ -f /sys/class/block/sdb/device/rescan ] && echo 1 > /sys/class/block/sdb/device/rescan" >> /etc/cron.d/lsblk-info
```
