#!/bin/sh

starttime=`date +%s.%N`

cd ..
rm -rf cc
rm -rf cc.zip
cp -r -v corcoder.com/ cc
cd cc
rm -rf node_modules/
npm install
npm run build
cd ..
zip -r cc.zip cc
scp cc.zip pi@corcoder.com:/home/pi/Server/cc.zip
ssh pi@corcoder.com 'cd /home/pi/Server;
rm -rf cc;
echo unzipping cc.zip...;
unzip cc.zip;
rm -rf corcoder.com-old;
mv corcoder.com corcoder.com-old;
mv cc corcoder.com;
cd corcoder.com;
killall screen;
screen -d -m "/home/pi/Server/corcoder.com/run-server.sh";'

endtime=`date +%s.%N`

runtime=$((endtime - starttime))

echo "Site deployed, runtime: $runtime"
