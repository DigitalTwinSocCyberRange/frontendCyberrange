#!/bin/bash
screen -dmSL frontend npm run serve -Logfile 

cd ./pyrest
screen -dmSL main python api.py -Logfile
tail -f /dev/null
