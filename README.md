# jenkins-ci-cd
# 19.03.203-jekins-ci-cd
# My Node.js App

This is a simple Node.js app that displays "Hello, world!" when you visit http://localhost:3000.

## Getting started

To run the app:

1. Install Docker: https://docs.docker.com/get-docker/
2. Build the Docker image: `docker build -t my-node-app01 .`
3. Run the Docker container: `docker run -p 3000:3000 my-node-app01`
4. Visit http://localhost:3000 in your web browser.
5. 'docker run -d --name my-node-app01 -p 3000:3000 my-node-app01'

## License

This app is released under the MIT License. See LICENSE.md for details.
