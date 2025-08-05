import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const classifyTicket = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/tickets/classify', { text });
      setCategory(response.data.category);
    } catch (err) {
      console.error('Error:', err);
      setCategory('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white p-6 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">NLP Ticket Classifier</h1>
        <textarea
          className="w-full border border-gray-300 rounded p-2 mb-4"
          rows="4"
          placeholder="Paste or type support ticket here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={classifyTicket}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          {loading ? 'Classifying...' : 'Classify'}
        </button>

        {category && (
          <div className="mt-6 text-center">
            <p className="text-gray-700">Predicted Category:</p>
            <h2 className="text-xl font-semibold text-indigo-700">{category}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
