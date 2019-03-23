#FROM jenkinsci/blueocean
FROM jenkins:latest
USER root
RUN apt-get update
RUN apt-get install -y sudo
RUN apt-get install -y node.js 
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip  
# FROM maven:3-alpine
# RUN allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
