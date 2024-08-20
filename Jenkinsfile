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

                    withDockerRegistry(credentialsId: '80384759-3b6e-4b9f-a0dc-9b8bc81a08b8', url: 'https://index.docker.io/v1/') {
                        // Build the Docker image
                        docker.build("${imageName}:${imageTag}")

                        // Push the Docker image to Docker Hub
                        docker.image("${imageName}:${imageTag}").push()

                        // Optional: Pull the image back to verify it's pushed correctly
                        docker.image("${imageName}:${imageTag}").pull()
                    }
                }
            }
        }
    }
}
