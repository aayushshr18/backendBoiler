# API Server Backend Setup

## Introduction

This repository contains the backend boilerplate code for setting up an API server. It provides a foundation for building RESTful APIs using NodeJs. This README will guide you through the setup process and explain how to use the provided codebase.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.
- [MongoDB](https://www.mongodb.com/) installed and running locally or accessible remotely.

## Installation

To get started, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd backendBoiler
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

Before running the server, you need to configure the environment variables. Create a `.env` file in the root directory and provide the necessary configurations. You can use the `.env.example` file as a template.

```plaintext
PORT=3000
DB_URI="mongodb://localhost:27017/mydatabase"
JWT_SECRET="mysecretcode"
```

Make sure to replace the values according to your setup.

## Running the Server

Once the dependencies are installed and the configuration is set up, you can start the server. Run the following command:

```bash
npm run dev
```

This will start the server at the specified port (default is 3000). You should see a message in the console indicating that the server is running.

## Usage

The API server is now up and running. You can start making requests to it using your preferred API client (e.g., [Postman](https://www.postman.com/), [curl](https://curl.se/)).

### Endpoints

Here are the available endpoints:

- `POST auth/v1/signup`: Create user (Reg).
- `POST auth/v1/login`: Create user (Login).
- `GET auth/v1/user`: View user.
- `PATCH auth/v1/user`: Update user.
- `DELETE auth/v1/user`: Delete user.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
Feel free to customize the README further based on your specific project requirements and technology stack.
