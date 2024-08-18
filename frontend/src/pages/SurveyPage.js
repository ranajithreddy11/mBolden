import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/SurveyPage.css';

const surveyData = {
  "sections": [
    {
      "title": "Section 1: Communication Strategy",
      "questions": [
        {
          "question": "Do you have a clearly defined internal communications strategy?",
          "type": "single",
          "options": [
            { "text": "Yes", "points": 2 },
            { "text": "Somewhat", "points": 1 },
            { "text": "No", "points": 0 }
          ]
        },
        {
          "question": "How frequently is the internal communications strategy reviewed?",
          "type": "single",
          "options": [
            { "text": "Annually", "points": 2 },
            { "text": "Every 2-3 years", "points": 1 },
            { "text": "Rarely/Never", "points": 0 }
          ]
        }
      ]
    },
    {
      "title": "Section 2: Tools and Channels",
      "questions": [
        {
          "question": "What types of communication tools and channels are currently used in your organization?",
          "type": "multiple",
          "options": [
            { "text": "Intranet", "points": 2 },
            { "text": "EMAIL", "points": 2 },
            { "text": "Internal Social Network", "points": 1 },
            { "text": "Instant messaging app", "points": 1 },
            { "text": "None", "points": 0 }
          ]
        },
        {
          "question": "How effective are these tools and channels in reaching all employees?",
          "type": "single",
          "options": [
            { "text": "Very effective", "points": 2 },
            { "text": "Moderately effective", "points": 1 },
            { "text": "Not effective", "points": 0 }
          ]
        }
      ]
    },
    {
      "title": "Section 3: Employee Engagement",
      "questions": [
        {
          "question": "How often do employees receive communications from senior leadership?",
          "type": "single",
          "options": [
            { "text": "Weekly", "points": 2 },
            { "text": "Monthly", "points": 1 },
            { "text": "Rarely/Never", "points": 0 }
          ]
        },
        {
          "question": "Is there a mechanism for employees to provide feedback on internal communications?",
          "type": "single",
          "options": [
            { "text": "Yes, regularly used", "points": 2 },
            { "text": "Yes, rarely used", "points": 1 },
            { "text": "No", "points": 0 }
          ]
        }
      ]
    },
    {
      "title": "Section 4: Content Relevance and Clarity",
      "questions": [
        {
          "question": "How relevant do employees find the content of internal communications?",
          "type": "single",
          "options": [
            { "text": "Very relevant", "points": 2 },
            { "text": "Somewhat relevant", "points": 1 },
            { "text": "Not relevant", "points": 0 }
          ]
        },
        {
          "question": "How clear and understandable is the content of internal communications?",
          "type": "single",
          "options": [
            { "text": "Very clear", "points": 2 },
            { "text": "Somewhat clear", "points": 1 },
            { "text": "Not clear", "points": 0 }
          ]
        }
      ]
    }
  ]
};

const SurveyPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const section = surveyData.sections[currentSection];
  const question = section.questions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < surveyData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      navigate('/results');  // Redirect to results page
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(surveyData.sections[currentSection - 1].questions.length - 1);
    }
  };

  return (
    <div className="survey-container">
      <h2 className="internalcommunication">{section.title}</h2>
      <p className="description">Question {currentQuestion + 1}: {question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type={question.type === 'single' ? 'radio' : 'checkbox'}
              name={`question-${currentSection}-${currentQuestion}`}
              value={option.points}
              id={`option-${index}`}
            />
            <label htmlFor={`option-${index}`}>{option.text}</label>
          </div>
        ))}
      </div>
      <div className="navigation">
        {!(currentSection === 0 && currentQuestion === 0) && (
          <button className="next" onClick={handlePrevious}>Previous</button>
        )}
        <button className="next" onClick={handleNext}>
          {currentSection === surveyData.sections.length - 1 && currentQuestion === section.questions.length - 1 ? 'Get Results' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default SurveyPage;
