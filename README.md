sudo /etc/init.d/apache2 stop
sudo /etc/init.d/mysql stop
sudo /etc/init.d/proftpd stop
sudo /opt/lampp/lampp start
npm run dev

#prisma migration
loJ2athaujnfgiriLfoevfeskiShyumfiyaBsinftaNosor

npx prisma migrate dev

#prisma generate
npx prisma generate

ssh root@199.193.6.184
JcGjdQ8G32ie97XZ7s

npx prisma migrate dev

npm i

cd mpbian
git pull
npm run build
pm2 restart mpbian

Backup
mysqldump -u root -p MpbianDatabase > backup.sql

Restore
mysql -u root -p --one-database MpbianDatabase < backup.sql

scp root@199.193.6.184:~/db/backup.sql "C:\Users\jahan\Mpbian"
