FROM node:8-alpine
RUN -p 4444:4444 -p 59000:59000 selenium/standalone-chrome-debug
RUN npm install
RUN npm install webdriver-manager -g
RUN npm run wdup
RUN npm test
FROM maven:3-alpine
RUN allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
