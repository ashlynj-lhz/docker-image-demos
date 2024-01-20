pipeline {
    agent any
    environment {
        REPOSITORY_URI = '601765242740.dkr.ecr.ap-south-1.amazonaws.com/node-app'
    }
    stages {
        stage('Logging into AWS ECR') {
            steps {
                script {
                    sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 601765242740.dkr.ecr.ap-south-1.amazonaws.com'
                }
            }
        }

        stage('Checkout ') {
            steps {
		checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'gh-lhz', url: 'https://github.com/ashlynj-lhz/docker-image-demos.git']])
            }
        }

        stage('Build App Image') {
            steps {
                script {
                    dockerImage = docker.build("${REPOSITORY_URI}:${BUILD_NUMBER}", ".")
                }
            }
        }

        stage('Upload App Image'){
            steps {
                script {
                    sh """docker push 601765242740.dkr.ecr.ap-south-1.amazonaws.com/node-app:${BUILD_NUMBER}"""
                }
            }
        }
    }
}
