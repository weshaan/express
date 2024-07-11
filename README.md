# Express.js simple router server

This project is a simple Express.js server that provides an API for managing a collection of books. The server allows you to retrieve the list of books, get details of a specific book, and add new books to the collection.

## Prerequisites

- Node.js installed on your machine.
- Basic knowledge of Express.js and JavaScript.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    node index.js
    ```
2. The server will be running on port 3000. You can access the API endpoints using a tool like Postman or your web browser.


### Get All Books

- **URL:** `/api`
- **Method:** `GET`
- **Description:** Retrieves the list of all books.

### Get Specific Book

- **URL:** `/api/:item`
- **Method:** `GET`
- **Description:** Retrieves the details of a specific book.

### Add a New Book

- **URL:** `/api`
- **Method:** `POST`
- **Description:** Adds a new book to the collection.
- **Response:** `201 Created`

### Note that this is a very basic implementation and lacks error handling and security measures that a real-world application would require.
## Thank you.




