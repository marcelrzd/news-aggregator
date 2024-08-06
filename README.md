# News Aggregator

This is a News Aggregator application built with React. This application aggregates news articles from various sources and displays them in a user-friendly format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Docker on your local machine. If not, you can download and install it from [Docker's official website](https://www.docker.com/get-started).

## Installing and Running the Application

To install and run the application, follow these steps:

### Using Docker

1. **Clone the repository:**
   git clone https://github.com/your-username/news-aggregator.git
   cd news-aggregator

2. **Build the Docker image:**
   docker build -t news-aggregator .
3. **Run the Docker container:**
   docker run -p 3000:3000 news-aggregator

4. **Access the application:**
   Open your web browser and navigate to http://localhost:3000 to see the application running.
