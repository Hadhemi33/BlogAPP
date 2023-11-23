pipeline {
  agent {
    docker {
      image 'node:16-alpine'
    }
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker build -t my-app:latest .'
        sh 'docker run -p 3000:3000 -d my-app:latest'
      }
    }
  }
}