# NLP Ticket Classifier

A full-stack machine learning web application that classifies customer support tickets into categories like IT Support, Hardware, Finance, DevOps, etc., using a simple Logistic Regression model and TF-IDF vectorization.

This project includes a Flask backend serving the classifier model and a React + Tailwind CSS frontend for a modern, interactive UI.

---

##  Tech Stack

**Frontend:**
- React (via Create React App)
- Tailwind CSS
- Axios for API requests

**Backend:**
- Python + Flask
- Scikit-learn for ML pipeline
- CountVectorizer + LogisticRegression (can upgrade to BERT later)
- Flask-CORS for API access

**Others:**
- Joblib (for model persistence)
- Local SQLite (optional for logging)
- Dummy model generated on startup

---

## Features

- Real-time ticket classification form
- Predicts category based on text input
- Fast, responsive UI
- Flask REST API
- Modular backend structure for future scaling
- Environment variable config
- Easily swappable ML model

---

## Folder Structure

nlp-ticket-classifier/
├── backend/
│ ├── app/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ ├── config/
│ ├── create_dummy_model.py
│ ├── app.py
│ └── requirements.txt
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── index.js
│ ├── public/
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── .env.example
│ └── package.json
└── README.md

yaml
Copy
Edit

---

##  Getting Started

### 1. Backend Setup (Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # or source venv/bin/activate
pip install -r requirements.txt
python create_dummy_model.py
python app.py
Flask API runs on: http://localhost:5000

2. Frontend Setup (React)
bash
Copy
Edit
cd frontend
npm install
npm run start
React app runs on: http://localhost:3000

 API Endpoint
Method	Endpoint	Description
POST	/api/tickets/classify	Classifies the given ticket text

Request:
json
Copy
Edit
{ "text": "reset my email password" }
Response:
json
Copy
Edit
{ "category": "IT Support" }
 Future Improvements
Replace Logistic Regression with BERT via HuggingFace

Add user authentication and admin roles

Store classified tickets in SQLite or PostgreSQL

Upload batch tickets from CSV

Create analytics dashboard for support center
 License
MIT License — free to use, fork, and build upon.