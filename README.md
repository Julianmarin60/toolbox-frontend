# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Make sure you have Docker installed on your machine. You can download Docker from the official website: [https://www.docker.com/](https://www.docker.com/)

You will also need Node.js version 16.20.2 installed on your machine. You can download Node.js from the official website: [https://nodejs.org/](https://nodejs.org/)

## Running the Project

To run the project using Docker, follow these steps:

1. Clone this repository to your local machine.

2. Open a terminal or command prompt.

3. Navigate to the project directory.

4. Run the following command to start the project using docker-compose:
    ```bash
    docker-compose up -d
    ```

    This command will build the Docker containers and start the project in detached mode.

5. Once the containers are up and running, open your web browser and go to [http://localhost:4200](http://localhost:4200) to view the application.

To run the application locally without Docker, make sure you have Node.js version 16.20.2 installed. Then, navigate to the project directory in a terminal or command prompt and run the following commands:

- To start the application:
    ```bash
    npm start
    ```

- To run the tests:
    ```bash
    npm test
    ```

Remember to install the project dependencies by running `npm install` before starting the application or running the tests.
