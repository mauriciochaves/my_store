pipeline {
    agent none
    stages {
        stage('Run Tests') {
            agent {
                docker {
                    image 'iojs'
                    //args '--link selenium_server'
                }
            }
            steps {
                sh "npm install"
                sh "npm install webdriver-manager -g"
                sh "npm run wdup"
                sh "npm test"
            }
        }
        stage('Report') {
            agent {
                docker { image 'maven:3-alpine' }
            }
            steps {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }
}
