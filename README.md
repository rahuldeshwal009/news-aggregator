# React + TypeScript + Vite

## Setup the Repository

- Clone this repo to your local
- Run `yarn` from the root of the project

### Run the Project

To start the development server, run the following command:

yarn dev

## Steps to Run the Project within Docker

1. Set Up the Dockerfile -> [./Dockerfile](./Dockerfile)
2. Build the Docker Image -> docker build --no-cache -t news-aggregator .
3. Run the Docker Container -> docker run -p 8080:8080 news-aggregator
4. Access the Application -> [http://localhost:8080](http://localhost:8080)

## App Preview
<img width="1723" alt="image" src="https://github.com/user-attachments/assets/377f2207-9ebc-4a9f-aef4-3125aa55ae81" />
