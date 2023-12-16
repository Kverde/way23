---
title: "Создание и монтирование файловой системы в Linux (mkfs, mount, blkid)"
date: "2023-12-16"
categories:
  - "Linux"
tags:
  - "mkfs"
  - "mount"
  - "blkid"
---

# {{ $frontmatter.title }}

После [разметки диска](linux-fdisk.md), на разделах нужно создать файловую систему. Сделать это можно программой `mkfs`. в систему добавлен диск `sdb` с двумя разделами: `sdb1` и `sdb2`.

```bash
┌─[user@parrot]─[~]
└──╼ $sudo fdisk -l
[sudo] password for user: 


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


Disk /dev/sda: 30 GiB, 32212254720 bytes, 62914560 sectors
Disk model: VBOX HARDDISK   
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x5bfff3f8

Device     Boot Start      End  Sectors Size Id Type
/dev/sda1  *     2048 62910539 62908492  30G 83 Linux
```

Для создания файловой системы в команду `mkfs` нужно передать тип файловой системы (параметр `-t`) и путь к разделу. Создадим на двух разделах две разные файловые системы: `ext4` и 

```bash
┌─[✗]─[user@parrot]─[~]
└──╼ $sudo mkfs -t ext4 /dev/sdb1
[sudo] password for user: 
mke2fs 1.46.6 (1-Feb-2023)
Creating filesystem with 409600 1k blocks and 102400 inodes
Filesystem UUID: a6411a93-7813-4431-9203-f53209211e96
Superblock backups stored on blocks: 
	8193, 24577, 40961, 57345, 73729, 204801, 221185, 401409

Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done 
```

```bash
└──╼ $sudo mkfs -t btrfs /dev/sdb2
btrfs-progs v6.1.3 
See http://btrfs.wiki.kernel.org for more information.

NOTE: several default settings have changed in version 5.15, please make sure
      this does not affect your deployments:
      - DUP for metadata (-m dup)
      - enabled no-holes (-O no-holes)
      - enabled free-space-tree (-R free-space-tree)

Label:              (null)
UUID:               9d9c2052-2317-4ffa-9001-719342a91218
Node size:          16384
Sector size:        4096
Filesystem size:    622.98MiB
Block group profiles:
  Data:             single            8.00MiB
  Metadata:         DUP              32.00MiB
  System:           DUP               8.00MiB
SSD detected:       no
Zoned device:       no
Incompat features:  extref, skinny-metadata, no-holes
Runtime features:   free-space-tree
Checksum:           crc32c
Number of devices:  1
Devices:
   ID        SIZE  PATH
    1   622.98MiB  /dev/sdb2
```

Вывод информации при создании разных файловых систем различается. В двух случаях команда возвращает UUID — уникальный идентификатор файловой системы. По нему можно ссылаться на файловый системе вместе пути к разделу вроде `/dev/sdb1`, так как этот путь зависит от порядка инициализации устройств и может изменится, а идентификатор файловой системы записан на диске и не меняется.

Создадим два каталога. 

```bash
┌─[user@parrot]─[~/test]
└──╼ $mkdir disk1 disk2
┌─[✗]─[user@parrot]─[~/test]
└──╼ $ls -l
total 0
drwxr-xr-x 1 user user 0 Dec 16 08:44 disk1
drwxr-xr-x 1 user user 0 Dec 16 08:44 disk2

```


Теперь примонтируем две файловые системы, одну с помощью пути к диску, а вторую с указанием UUID файловой системы. Команда `mount` монтирует файловую систему, первый параметр — раздел, второй — точка монтирования файловой системы.


```bash
┌─[user@parrot]─[~/test]
└──╼ $sudo mount /dev/sdb1 ./disk1
┌─[user@parrot]─[~/test]
└──╼ $sudo mount UUID=9d9c2052-2317-4ffa-9001-719342a91218 ./disk2
```

Параметры каталогов теперь изменились, у них стал другой владелец и группа:

```bash
┌─[✗]─[user@parrot]─[~/test]
└──╼ $ls -l
total 17
drwxr-xr-x 3 root root 1024 Dec 16 08:37 disk1
drwxr-xr-x 1 root root    0 Dec 16 08:39 disk2
```

Команда `mount` без параметров выводит список примонтированных файловых систем.

```bash
┌─[user@parrot]─[~/test]
└──╼ $mount | grep /sdb
/dev/sdb1 on /home/user/test/disk1 type ext4 (rw,relatime)
/dev/sdb2 on /home/user/test/disk2 type btrfs (rw,relatime,space_cache=v2,subvolid=5,subvol=/)
```

В выводе команды присутствуют:

1. Примонтированное устройство (раздел диска)
2. Точка монтирования
3. Тип файловой системы
4. Параметры монтирования

Идентификаторы файловых систем так же можно посмотреть командой `blkid`:

```bash
┌─[user@parrot]─[~/test]
└──╼ $blkid
/dev/sda1: UUID="3b8dda7f-a34a-40b6-bc8b-d90d2087258b" UUID_SUB="bf469f0b-dc85-4689-8612-8960300d1402" BLOCK_SIZE="4096" TYPE="btrfs" PARTUUID="5bfff3f8-01"
/dev/sdb1: UUID="a6411a93-7813-4431-9203-f53209211e96" BLOCK_SIZE="1024" TYPE="ext4" PARTUUID="64e9d72b-4c96-ab44-ba49-78f5df5d3b94"
/dev/sdb2: UUID="9d9c2052-2317-4ffa-9001-719342a91218" UUID_SUB="6a24be71-65e3-4207-92f6-6d47736422e0" BLOCK_SIZE="4096" TYPE="btrfs" PARTUUID="9ed5870c-444d-7146-8623-8c99d2015cdb"
```

Если попытаться записать файл в примонтированный диск, то окажется, что у пользователя недостаточно прав.

```bash
┌─[user@parrot]─[~/test]
└──╼ $cd disk2
┌─[user@parrot]─[~/test/disk2]
└──╼ $touch file.txt
touch: cannot touch 'file.txt': Permission denied
```

Это можно исправить изменив владельца точки монтирования.

```bash
┌─[user@parrot]─[~/test/disk2]
└──╼ $cd ..
┌─[✗]─[user@parrot]─[~/test]
└──╼ $sudo chown user ./disk2
```

Теперь прав достаточно:

```bash
┌─[user@parrot]─[~/test]
└──╼ $echo hello > ./disk2/text.txt
┌─[user@parrot]─[~/test]
└──╼ $ls -l ./disk2
total 4
-rw-r--r-- 1 user user 6 Dec 16 09:27 text.txt
```

Размонтируем диск. В команде `umount` можно указать диск или точку монтирования.

```bash
┌─[user@parrot]─[~/test]
└──╼ $sudo umount ./disk2
```

Теперь файл пропал из каталога.

```bash
┌─[user@parrot]─[~/test]
└──╼ $ls -l ./disk2
total 0
```

Примонтируем снова и файл снова будет на месте.

```bash
┌─[user@parrot]─[~/test]
└──╼ $sudo mount /dev/sdb2 ./disk2
┌─[user@parrot]─[~/test]
└──╼ $cat ./disk2/text.txt 
hello
```
