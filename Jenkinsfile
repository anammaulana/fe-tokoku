pipeline {
    agent any

    environment {
        NODE_VERSION = '22' // Sesuaikan dengan versi Node.js yang digunakan
        APP_NAME = 'fe-tokoku'
        DEPLOY_DIR = '/var/www/fe-tokoku'
        REPO_URL = 'https://github.com/anammaulana/fe-tokoku.git'
        BRANCH = 'main'
    }

    stages {
         stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/anammaulana/fe-tokoku.git'
            }
        }
        

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies'
                    sh "cd ${DEPLOY_DIR}&& npm install"
                }
            }
        }


        stage('Build') {
            steps {
                script {
                    echo 'Building application'
                    sh "cd ${DEPLOY_DIR} && npm run build"
                }
            }
        }

        stage('Restart Application') {
            steps {
                script {
                    echo 'Restarting application with PM2'
                    sh "/usr/bin/pm2 restart ${APP_NAME} --update-env "
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
