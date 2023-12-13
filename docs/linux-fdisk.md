---
title: "Разметка диска в Linux с помощью fdisk"
date: "2023-12-13"
categories:
  - "Linux"
tags:
  - "fdisk"
---

# {{ $frontmatter.title }}

Сначала добавим диск, в VirtualBox это делается в настройках виртуальной машины. Добавим новый диск размером 1гб.

![](images/linux-fdisk/linux-fdisk-01.png)

![](images/linux-fdisk/linux-fdisk-02.png)

![](images/linux-fdisk/linux-fdisk-03.png)

![](images/linux-fdisk/linux-fdisk-04.png)

![](images/linux-fdisk/linux-fdisk-05.png)

![](images/linux-fdisk/linux-fdisk-06.png)

Проверим, что в системе появился второй диск

```bash
┌─[user@parrot]─[~]
└──╼ $ls /dev | grep -E ^sd
sda
sda1
sdb
```

Так же диски можно посмотреть через `fdisk` с параметром `-l`:

```bash
┌─[user@parrot]─[~]
└──╼ $sudo fdisk -l
Disk /dev/sda: 30 GiB, 32212254720 bytes, 62914560 sectors
Disk model: VBOX HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x5bfff3f8

Device     Boot Start      End  Sectors Size Id Type
/dev/sda1  *     2048 62910539 62908492  30G 83 Linux


Disk /dev/sdb: 1 GiB, 1073741824 bytes, 2097152 sectors
Disk model: VBOX HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Запустим `fdisk` и передадим ему путь к диску.

```bash
┌─[✗]─[user@parrot]─[~]
└──╼ $sudo fdisk /dev/sdb

Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x9ccf78a2.

Command (m for help): 
```

Создадим на диске таблицу разделов GPT

```
Command (m for help): g
Created a new GPT disklabel (GUID: 298E01AB-6142-C446-AB5B-EF5AF4D7D40D).
```

Добавим один раздел размером 400мб.

```
Command (m for help): n
Partition number (1-128, default 1): 1
First sector (2048-2097118, default 2048): 
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-2097118, default 2097118): +400M

Created a new partition 1 of type 'Linux filesystem' and of size 400 MiB.
```

И второй на всё оставшееся место:

```
Command (m for help): n
Partition number (2-128, default 2): 2
First sector (821248-2097118, default 821248): 
Last sector, +/-sectors or +/-size{K,M,G,T,P} (821248-2097118, default 2097118): 

Created a new partition 2 of type 'Linux filesystem' and of size 623 MiB.
```

Запишем изменения командой `w`

```
Command (m for help): w
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Проверим ещё раз список дисков, теперь на втором диске присутствуют два раздела.

```bash
┌─[user@parrot]─[~]
└──╼ $sudo fdisk -l
Disk /dev/sda: 30 GiB, 32212254720 bytes, 62914560 sectors
Disk model: VBOX HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x5bfff3f8

Device     Boot Start      End  Sectors Size Id Type
/dev/sda1  *     2048 62910539 62908492  30G 83 Linux


Disk /dev/sdb: 1 GiB, 1073741824 bytes, 2097152 sectors
Disk model: VBOX HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 298E01AB-6142-C446-AB5B-EF5AF4D7D40D

Device      Start     End Sectors  Size Type
/dev/sdb1    2048  821247  819200  400M Linux filesystem
/dev/sdb2  821248 2097118 1275871  623M Linux filesystem
```

Так же посмотреть список дисков и связанные с ними разделы можно командой `lsblk`:

```bash
┌─[user@parrot]─[~]
└──╼ $lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   30G  0 disk 
└─sda1   8:1    0   30G  0 part /home
sdb      8:16   0    1G  0 disk 
├─sdb1   8:17   0  400M  0 part 
└─sdb2   8:18   0  623M  0 part 
sr0     11:0    1 1024M  0 rom  
```

## Ссылки

* [basis.gnulinux.pro: 22. Работа с дисками](https://basis.gnulinux.pro/ru/latest/basis/22/22._Работа_с_дисками.html)

