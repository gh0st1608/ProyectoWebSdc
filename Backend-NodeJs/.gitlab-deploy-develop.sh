#!/bin/bash

#Conseguir lista de servidores

set -f

string = $PRODUCCION_SERVIDOR_DESPLIEGUE
array = (${string//,/})

#Iterar servidores para deplegar y pulear ultimo commit

for i in "${!array[@]}"; do
    echo "Desplegar proyecto en servidor ${array[i]}"
    ssh ec2-user} "pm2 stop index.js && cd proyecto_sdc && git pull origin master && pm2 start index.js"@${array[i]