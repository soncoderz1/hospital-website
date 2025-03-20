# Medical Appointment System

This project is a web application for booking medical appointments online. It consists of a client-side built with React and a server-side built with Node.js, using MongoDB as the database.

## Features

- User authentication (login and registration)
- Appointment booking interface
- User dashboard displaying personal information and statistics
- Profile management for users
- Reusable components for a consistent UI

## Project Structure

```
medical-appointment-system
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── utils
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── server
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── config
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in the project.