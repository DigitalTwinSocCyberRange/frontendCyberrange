bash deactivate_directives.sh
cd ./../
docker-compose stop
cd ./../DigitalTwinCyberrange/deployments/docker
docker-compose stop
sudo docker container rm elasticsearch
sudo docker volume rm docker_es-data

