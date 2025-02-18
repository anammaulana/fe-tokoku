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
                git branch:${BRANCH}, url: ${REPO_URL}'
            }
        }
        

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies'
                    sh "cd ${DEPLOY_DIR}"
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
                    sh "pm2 restart ${APP_NAME} "
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
