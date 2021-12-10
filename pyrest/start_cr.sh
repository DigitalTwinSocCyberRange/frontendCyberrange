pkill screen
screen -dmS main bash deactivate_directives.sh 
screen -dmS main python3 api.py 

cd ./../
docker-compose down
docker-compose up -d

cd ./../DigitalTwinCyberrange/deployments/docker/
bash start_backend.sh
