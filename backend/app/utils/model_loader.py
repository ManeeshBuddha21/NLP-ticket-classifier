import joblib
import os

def load_model_and_vectorizer():
    model_path = os.path.join('app', 'models', 'bert_classifier.pkl')
    vectorizer_path = os.path.join('app', 'models', 'vectorizer.pkl')

    model = joblib.load(model_path)
    vectorizer = joblib.load(vectorizer_path)

    return model, vectorizer
