# 🏠 Real Estate Investment Platform

Fullstack web application for browsing real estate investment deals.
Users can register, login and view available property investment opportunities.

## 🚀 Tech Stack

### Frontend

* React
* TypeScript
* Redux Toolkit
* React Router
* CSS Modules
* Vite

### Backend

* NestJS
* Prisma ORM
* PostgreSQL
* JWT Authentication
* bcrypt

---

## 📂 Project Structure

```
real-estate-app
│
├── frontend        # React application
│
├── backend         # NestJS API
│
└── README.md
```

---

## 🔐 Authentication

Authentication is implemented using **JWT tokens**.

Features:

* User registration
* User login
* Protected routes
* Authorization via Bearer token

---

## 📊 Features

* User registration
* User login
* Protected routes
* Display real estate investment deals
* JWT authentication
* Backend API with NestJS
* Database with Prisma ORM

---

## 🖥️ Screenshots

### Home Page

![Home](./frontend/public/metropolis.png)

---

## ⚙️ Installation

### 1️⃣ Clone repository

```
git clone https://github.com/YOUR_USERNAME/real-estate-app.git
```

---

### 2️⃣ Backend setup

```
cd backend
npm install
```

Create `.env` file:

```
DATABASE_URL="postgresql://user:password@localhost:5432/real_estate"
JWT_SECRET="supersecret"
```

Run migrations:

```
npx prisma migrate dev
```

Start backend:

```
npm run start:dev
```

---

### 3️⃣ Frontend setup

```
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth

```
POST /auth/register
POST /auth/login
```

### Properties

```
GET /properties
```

Requires **JWT token**

---

## 📌 Future Improvements

* Property details page
* Investment application form
* User dashboard
* Admin panel
* Image upload
* Deployment

---

## 👩‍💻 Author

Natalia Fedorchuk
