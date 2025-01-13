# News API Application

This is a full-stack web application that interacts with an API to provide news articles, including top headlines and search functionality. The project is built with the following technologies:

- **Backend**: Node.js, Express, MongoDB, Redis, JWT Authentication
- **Frontend**: React, React Router, Axios
- **Other Tools**: Bootstrap (for responsive design), CORS, dotenv

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a **News API Application** where users can authenticate via JWT and access news articles from different categories. Users can:

- **Login** using their credentials.
- **View top headlines**.
- **Search news articles** by keywords.
- **View their reading history**.

The application uses **MongoDB** for storing user data and **Redis** for caching purposes to improve performance. The frontend is built using **React** and communicates with the backend using **Axios** for API calls.

---

## Features

### 1. **User Authentication**:
   - Users can log in with their credentials (email and password).
   - Authentication is managed using **JWT (JSON Web Tokens)**.
   - The token is stored in `localStorage` after successful login for future requests.
   - A **protected route** ensures that users cannot access certain pages without being authenticated.

### 2. **News Articles**:
   - Users can **view top headlines** from various news sources.
   - Users can **search for news articles** based on keywords.
   - News articles are fetched from an external API and displayed to users.
   
### 3. **User History**:
   - The application tracks users' reading history and allows them to view the articles they have previously read.
   - This data is stored in **MongoDB** and is accessible via a **protected API route**.

---

## Tech Stack

### **Frontend**:
- **React**: For building the user interface.
- **React Router**: For navigation between different pages of the application.
- **Axios**: For making HTTP requests to the backend.
- **Bootstrap**: For responsive design and quick styling of components.
- **Font Awesome**: For adding icons to the page.

### **Backend**:
- **Node.js**: A JavaScript runtime for building the server.
- **Express**: A web framework for Node.js to handle routing and middleware.
- **MongoDB**: A NoSQL database used for storing user data and history.
- **Redis**: Used for caching frequently accessed data to improve performance.
- **JWT (JSON Web Tokens)**: For handling authentication and protecting routes.
- **dotenv**: For loading environment variables.
- **CORS**: To enable cross-origin requests between the frontend and backend.
  
### **Other Libraries/Tools**:
- **bcryptjs**: For hashing passwords and securely storing them in the database.
- **jsonwebtoken**: For creating and verifying JWT tokens.
- **cors**: For handling CORS (Cross-Origin Resource Sharing) issues between the frontend and backend.
- **express-validator**: For validating input fields such as email and password.
- **dotenv**: For environment variable management.
- **mongoose**: MongoDB ODM (Object Document Mapper) used to interact with MongoDB.

---

## Backend Setup

### 1. **Clone the Repository**
   ```bash
   git clone https://github.com/rahulkini31/newsapi-project.git