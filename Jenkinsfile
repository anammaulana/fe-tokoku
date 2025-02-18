pipeline {
    agent any

    environment {
        // Set any environment variables you need
        NODE_ENV = 'production'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Next.js app for production
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Example command to deploy, adjust as needed
                    sh 'npm run start'
                }
            }
        }
    }

    post {
        always {
            // Clean up or notify after the pipeline is done
            echo 'Pipeline finished'
        }
    }
}
