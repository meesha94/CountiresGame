# CountriesGame Backend

This is the Node.js backend for the Country and Capital Quiz Game. It uses an external API to fetch the data needed for the game.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Introduction
The CountriesGame backend is responsible for handling requests and serving data related to countries and capitals. It fetches data from an external API and serves it to the frontend, which handles the user interface and game logic.

## Features
- Fetches country and capital data from an external API.
- Serves data to the frontend for the quiz game.
- Simple and efficient Node.js server setup.

## Installation

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/meesha94/CountiresGame.git
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

## Usage

1. **Start the server:**
    ```sh
    npm start
    ```

2. The backend will run on `http://localhost:8000` by default.
   

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **cors** - Middleware to enable CORS
- **axios** - Promise based HTTP client for the browser and Node.js (for making requests to the external API)

