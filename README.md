# Youtube Channel Duration Calculator

## Description

A Node.js application that retrieves all videos from a YouTube channel using the YouTube Data API, calculates the total duration of the videos, and outputs it in a human-readable format.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   git clone https://github.com/your-username/your-repository.git

2. **Navigate to the project directory:**

   cd your-repository

3. **Install dependencies:**

   npm install

## Configuration

Create a .env file in the root directory of the project with the following environment variables:

GOOGLE_API_KEY=your_google_api_key PORT=your_port_number API_CACHE_TIME=your_cache_time

Replace your_google_api_key, your_port_number, and your_cache_time with your actual values.

## Usage

To start the application, use the following command:

npm run start

## API Endpoints

### GET /api/channel-duration/:channelId

**Description:** Retrieves the duration of a channel by its ID.

**Parameters:**

- channelId (path parameter): The ID of the channel you want to query.

**Response:**

- **Success (200 OK):** { "channelId": "string", "duration": "string" }

- **Error (4xx, 5xx):** { "error": "error message" }
