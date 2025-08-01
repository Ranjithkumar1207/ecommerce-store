# 🛒 Local Store E-Commerce Platform

This is a full-stack e-commerce platform built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It allows users to browse, add, and purchase products. Admins can manage product listings.

## 🚀 Features

### 👤 User
- Register/Login functionality
- Browse available products
- Add to cart and checkout (UI-level)
- View purchase summary

### 🔧 Admin
- Add new products
- Edit or delete products
- Manage inventory (CRUD)

## 🧱 Tech Stack

- **Frontend**: React.js, Axios, Bootstrap (or Tailwind if used)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), bcrypt for password hashing
- **State Management**: useState, useEffect, Context API (if used)

## 📁 Project Structure

task-ecommerce-store/
│
├── client/ # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.js
│
├── server/ # Node + Express Backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── index.js
│
└── README.md

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-ecommerce-store.git
cd task-ecommerce-store
2. Setup Backend
bash
cd server
npm install
npm start
3. Setup Frontend
bash
cd client
npm install
npm start
App runs on:
Frontend: http://localhost:3000
Backend: http://localhost:5000

🌐 API Endpoints
POST /api/auth/register – Register a new user

POST /api/auth/login – Login existing user

GET /api/products – List all products

POST /api/products – Add new product (Admin only)

PUT /api/products/:id – Update product (Admin)

DELETE /api/products/:id – Delete product (Admin)

🔒 Authentication
JWT-based login & session management

Protected routes for admin access

🙌 Author
Ranjithkumar K
🧑‍💻 Full Stack Intern @ Prodigy Infotech
📧 ranjithkolanji04@gmail.com
