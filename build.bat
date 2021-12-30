@echo off
::
::  RMM Build Script
::
ECHO Building Docker container...
docker build -t signet-rmm-dev-web-host .
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 741716617916.dkr.ecr.us-east-2.amazonaws.com
docker tag signet-rmm-dev-web-host:latest 741716617916.dkr.ecr.us-east-2.amazonaws.com/signet-rmm-dev-web-host:latest
docker push 741716617916.dkr.ecr.us-east-2.amazonaws.com/signet-rmm-dev-web-host:latest
aws ecs update-service --cluster signet-rmm-dev-cluster --service signet-rmm-dev-web-host --region us-east-2 --force-new-deployment