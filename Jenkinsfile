node {

    stage('Biuld 1'){
        docker {
            image 'selenium/standalone-chrome-debug'
            label 'selenium_server'
            args '-d -p 4444:4444 -p 59000:59000'
        }
        echo 'Biulding...'
    }

    stage('Biuld 2') {
        docker {
            image 'node:8-alpine'
            label 'node'
            args '--link selenium_server'
        }
        echo 'Biulding...'
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