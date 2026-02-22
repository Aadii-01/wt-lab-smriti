import React from "react";
import "../styles/feedback.css";

const questions = [
  {
    title: "Overall Satisfaction",
    subtitle: "How satisfied are you with the platform overall?",
    left: "Very Dissatisfied",
    right: "Very Satisfied",
  },
  {
    title: "User Interface Design",
    subtitle: "How would you rate the visual design, colors, and layout?",
    left: "Poor",
    right: "Excellent",
  },
  {
    title: "Tests Quality & Clarity",
    subtitle: "How clear and comprehensive were the cognitive assessment tests?",
    left: "Confusing",
    right: "Very Clear",
  },
  {
    title: "Ease of Navigation",
    subtitle: "How easy was it to find what you needed and move around the platform?",
    left: "Difficult",
    right: "Very Easy",
  },
  {
    title: "Platform Speed & Performance",
    subtitle: "How would you rate the loading times and responsiveness?",
    left: "Very Slow",
    right: "Very Fast",
  },
  {
    title: "Accessibility & Ease of Use",
    subtitle: "How accessible and user-friendly was the platform for you?",
    left: "Not Accessible",
    right: "Very Accessible",
  },
  {
    title: "Likelihood to Recommend",
    subtitle: "How likely are you to recommend this platform to others?",
    left: "Not Likely",
    right: "Very Likely",
  },
];

export default function Feedback() {
  return (
    <div className="feedback-page">
      <div className="feedback-card">
        <div className="feedback-header">
          <h2>Platform Feedback</h2>
          <p>Your feedback helps us improve Smriti (स्मृति) for everyone.</p>
        </div>

        <div className="feedback-body">
          {questions.map((q, index) => (
            <div className="question-row" key={index}>
              <div className="question-text">
                <h4>{q.title}</h4>
                <p>{q.subtitle}</p>
              </div>

              <div className="rating-scale">
                <span className="scale-left">{q.left}</span>
                <div className="radio-group">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num}>
                      <input type="radio" name={`q${index}`} />
                      <span>{num}</span>
                    </label>
                  ))}
                </div>
                <span className="scale-right">{q.right}</span>
              </div>
            </div>
          ))}

          <div className="comments-section">
            <h4>Additional Comments (Optional)</h4>

            <label>User Interface Feedback</label>
            <textarea placeholder="e.g., The colors are pleasing, but the text size could be larger..." />

            <label>Tests Experience Feedback</label>
            <textarea placeholder="e.g., The instructions were clear, but the Image Description test loaded slowly..." />

            <label>User Experience Feedback</label>
            <textarea placeholder="e.g., Navigation is intuitive, but I couldn't find the logout button easily..." />

            <label>Suggestions & Improvements</label>
            <textarea placeholder="e.g., Please add a dark mode or more language options..." />
          </div>

          <div className="feedback-actions">
            <button className="cancel-btn">Cancel</button>
            <button className="submit-btn">Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}