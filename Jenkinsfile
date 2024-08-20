pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/buituansonHE172207/Training-React'
            }
        }
        
        stage('Build and Push') {
            steps {
                script {
                    // Define the image name and tag
                    def imageName = "tuansondocker1407/trainning-react"
                    def imageTag = "latest"

                    // Build the Docker image
                    sh "docker build -t ${imageName}:${imageTag} ."

                    // Push the Docker image to Docker Hub
                    sh "docker push ${imageName}:${imageTag}"

                    // Optional: Pull the image back to verify it's pushed correctly
                    sh "docker pull ${imageName}:${imageTag}"
                }
            }
        }
    }
}
