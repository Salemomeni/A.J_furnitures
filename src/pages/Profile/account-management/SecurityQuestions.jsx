import React, { useState } from 'react';
import './accountManagement.css';

const SecurityQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: '',
      answer: ''
    }
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { id: questions.length + 1, question: '', answer: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Security Questions:', questions);
    // submit to API or backend logic here
  };

  return (
    <div className="security-container">
      <h3>Security Questions</h3>
      <p>Set up security questions to help protect your account and recover it if needed.</p>

      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div className="question-group" key={q.id}>
            <select
              value={q.question}
              onChange={(e) =>
                handleQuestionChange(index, 'question', e.target.value)
              }
              required
            >
              <option value="">Select a security question</option>
              <option value="first_pet">What was the name of your first pet?</option>
              <option value="mother_maiden">What is your mother's maiden name?</option>
              <option value="birth_city">In what city were you born?</option>
              <option value="first_school">What is the name of your first school?</option>
              <option value="childhood_nickname">What was your childhood nickname?</option>
            </select>

            <input
              type="text"
              placeholder="Your Answer"
              value={q.answer}
              onChange={(e) =>
                handleQuestionChange(index, 'answer', e.target.value)
              }
              required
            />
          </div>
        ))}

        <button type="button" className="add-question" onClick={handleAddQuestion}>
          + Add Another Question
        </button>

        <button type="submit" className="save-btn">
          Save Security Questions
        </button>
      </form>
    </div>
  );
};

export default SecurityQuestions;
