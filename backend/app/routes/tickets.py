from flask import Blueprint, request, jsonify
from app.utils.model_loader import load_model_and_vectorizer

tickets_bp = Blueprint('tickets', __name__)
model, vectorizer = load_model_and_vectorizer()

@tickets_bp.route('/classify', methods=['POST'])
def classify_ticket():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing ticket text'}), 400

    text = data['text']
    X = vectorizer.transform([text])
    prediction = model.predict(X)[0]

    return jsonify({'category': prediction})
