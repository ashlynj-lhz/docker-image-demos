pipeline {
    agent any
    environment {
        registryCredential = 'ecr:ap-south-1:awscreds'
        appRegistry = "public.ecr.aws/o7b4l2p4/node-app"
        RegistryURL = "https://public.ecr.aws/o7b4l2p4/"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ashlynj-lhz/docker-image-demos.git'
            }
        }

        stage('Build App Image') {
            steps {
                script {
                    dockerImage = docker.build(appRegistry + ":BUILD_NUMBER", "./docker/.")
                }
            }
        }

        stage('Upload App Image'){
            steps {
                script {
                    docker.withRegistry(RegistryURL, registryCredential) {
                        dockerImage.push("$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}