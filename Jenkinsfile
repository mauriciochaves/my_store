node {
    checkout scm
    docker.image('selenium/standalone-chrome-debug'),withRun('-d -p 4444:4444 -p 59000:59000') { c ->
        docker.image('node:8-alpine').inside("--link ${c.id}") {
            sh "npm install"
            sh "npm install webdriver-manager -g"
            sh "npm run wdup"
            sh "npm test"
        }

    }
}