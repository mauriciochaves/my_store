node {

    stage('Biuld 1'){
        echo 'Biulding...'
        sh 'apt-get install node'
        sh 'apt-get install npm'
        sh "npm install"
        sh "npm install webdriver-manager -g"
        sh "npm run wdup"
        sh "npm test"
    }


    stage('Test') {
        echo 'Testing...'
    }


    stage('Deploy') {
        echo 'Deploying...'
    }
}