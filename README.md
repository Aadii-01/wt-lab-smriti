# 🧠 Smriti (स्मृति) — Full Stack Web Application

A full-stack web application built using **Django (Backend)** and **React (Frontend)**, designed to replicate a modern cognitive assessment platform UI with scalable architecture.

## 🚀 Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* React Router DOM

### Backend (Planned / In Progress)

* Django
* Django REST Framework (DRF)
* SQLite (Development)

## 📂 Project Structure

```
fullstack-project/
│
├── backend/        # Django Backend (API)
│   ├── manage.py
│   ├── smriti/
│   └── api/
│
├── frontend/       # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── styles/
│   └── package.json
│
└── README.md
```

## ✨ Features Implemented (Till Now)

* Django + React integration setup
* API and frontend running simultaneously
* Custom Feedback UI (Pixel-matched design)
* Component-based React structure
* Clean CSS styling system
* Router-based page navigation

## 🎯 Current UI Pages

* Landing Page (in progress)
* Feedback Page (styled like production UI)
* Tasks List (basic API test page)

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Aadii-01/wt-lab-smriti.git
cd wt-lab-smriti
```

### 2️⃣ Backend Setup (Django)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate   # Linux/Mac
pip install django djangorestframework
python manage.py migrate
python manage.py runserver
```

Backend runs on:

```
http://127.0.0.1:8000/
```

### 3️⃣ Frontend Setup (React)

Open new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000/
```

## 🔗 API Connection (Planned)

React frontend will consume Django REST APIs:

* /api/tasks/
* /api/feedback/ (planned)
* /api/auth/ (planned)

## 🧩 Future Improvements

* Authentication (Login/Signup)
* Database integration
* API-based feedback submission
* Deployment (AWS / Vercel + Render)
* JWT Authentication
* Dark Mode UI

## 👨‍💻 Developer

Aditya Shirke
CS Student | Full Stack + AI Enthusiast

## 📌 Note

This project is being actively developed as part of a WT Lab + Full Stack learning journey using Django and React.
