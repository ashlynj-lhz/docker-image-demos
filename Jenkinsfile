pipeline {
    agent any
    environment {
        REPOSITORY_URI = '601765242740.dkr.ecr.ap-south-1.amazonaws.com/node-app'
	ECS_CLUSTER = 'node-cluster'
	ECS_SERVICE_NAME = 'node-svc'
	AWS_DEFAULT_REGION = 'ap-south-1'
    }
    stages {
        stage('Logging into AWS ECR') {
            steps {
                script {
		    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'awscreds', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                        sh 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 601765242740.dkr.ecr.ap-south-1.amazonaws.com'
                    }	
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
                    dockerImage = docker.build("${REPOSITORY_URI}:latest", ".")
                }
            }
        }

        stage('Upload App Image'){
            steps {
                script {
                    sh """docker push ${REPOSITORY_URI}:latest"""
                }
            }
        }
	stage('Deploy to ECS') {
            steps {
                script {
		    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'awscreds', accessKeyVariable: 'AWS_ACCESS_KEY_ID', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                        sh """aws ecs update-service --cluster ${ECS_CLUSTER} --service ${ECS_SERVICE_NAME} --force-new-deployment --region ${AWS_DEFAULT_REGION}"""
                    }
                }
            }
        }
    }
}
