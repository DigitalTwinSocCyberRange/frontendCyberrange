pwd
for var in "$@"
do
    mv ./../../DigitalTwinCyberrange/deployments/docker/conf/dsiem/configs/directives_dt_$var.txt ./../../DigitalTwinCyberrange/deployments/docker/conf/dsiem/configs/directives_dt_$var.json  
done
docker restart dsiem digital_twin

