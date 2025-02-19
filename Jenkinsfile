pipeline {
    agent any
 triggers {
        // Trigger build ketika ada perubahan pada repository
        githubPush()
    }
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
        script {
            sh """
                git pull origin ${BRANCH} --rebase || git fetch origin && git reset --hard origin/${BRANCH}
                git checkout ${BRANCH}
            """
        }
    }
}

        // stage('Install Dependencies') {
        //     steps {
        //         script {
        //             echo 'Installing dependencies'
        //             sh "cd ${DEPLOY_DIR}"
        //         }
        //     }
        // }

        stage('Build') {
            steps {
                script {
                    echo 'Building application'
                    sh "cd ${DEPLOY_DIR} &&  npm run build"
                }
            }
        }

        stage('Restart Application') {
            steps {
                script {
                    echo 'Checking PM2 processes'
                     sh "cd ${DEPLOY_DIR} &&  pm2 list"

                    echo 'Restarting application with PM2'
                    sh "pm2 restart ${APP_NAME} --update-env || pm2 start ${DEPLOY_DIR} --name ${APP_NAME}"
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
