# NLP Ticket Classifier

## Overview

A full-stack machine learning web app that classifies customer support tickets using BERT and scikit-learn.
It includes real-time prediction, admin management of tags, and historical data logging. Built with React (frontend) and Flask (backend).

---

## Features

- BERT-powered NLP classification of tickets
- Real-time API with Flask
- Admin dashboard to view tagged tickets
- Searchable ticket history
- Preprocessing pipeline with scikit-learn
- Clean, modern UI using React + Tailwind CSS

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Flask, Flask-RESTful, scikit-learn, transformers
- **ML/NLP:** BERT via HuggingFace Transformers
- **Database:** SQLite (can switch to PostgreSQL)
- **API Client:** Axios

---

## Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Folder Structure

```
nlp_ticket_classifier/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   ├── config/
│   └── app.py
├── frontend/
│   ├── src/components/
│   ├── src/pages/
│   └── public/assets/
└── assets/screenshots/
```

---

## Environment Variables

Copy `.env.example` into `.env` for both frontend and backend and fill in the values.

---

## Future Improvements

- Add user auth (JWT)
- Deploy BERT model with ONNX or FastAPI
- Role-based ticket review system
- Notification for misclassified tickets
