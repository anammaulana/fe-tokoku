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
        REPO_URL = 'git@github.com:anammaulana/fe-tokoku.git' // Ganti dengan URL SSH repo
        BRANCH = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    withCredentials([sshUserPrivateKey(credentialsId: 'abd4393c-1330-465c-9578-ef920792da02', keyFileVariable: 'SSH_KEY')]) {
                        echo 'Cloning repository'
                        sh """
                            git config --global core.sshCommand "ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no"
                             cd ${DEPLOY_DIR} && git pull origin ${BRANCH}
                        """
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies'
                    sh "cd ${DEPLOY_DIR} && npm install"
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
                    echo 'Checking PM2 processes'
                    sh "pm2 list"

                    echo 'Restarting application with PM2'
                    sh "pm2 restart ${APP_NAME} --update-env || pm2 restart ${DEPLOY_DIR} --name ${APP_NAME}"
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
