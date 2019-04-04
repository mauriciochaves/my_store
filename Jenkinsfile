node {

    stage('Clone Project'){
        echo 'Git Pull'
        checkout scm
    }

    stage('Biuld 1'){
        echo 'Biulding 1...'
        docker.image('selenium/standalone-chrome-debug'),withRun('-d -p 4444:4444 -p 59000:59000 --name selenium_server')
    }

    stage('Biuld 2'){
        echo 'Biulding 2...'
        docker.image('node:8-alpine').inside("--link selenium_server")
    }

    stage('Test') {
        echo 'Testing...'
        sh "npm install"
        sh "npm install webdriver-manager -g"
        sh "npm run wdup"
        sh "npm test"
    }


    stage('Deploy') {
        echo 'Deploying...'
    }
}