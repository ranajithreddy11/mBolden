import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/SurveyPage.css';
import surveyData from '../assets/data/surveyData.json';

const SurveyPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const section = useMemo(() => surveyData.sections[currentSection], [currentSection]);
    const question = useMemo(() => section.questions[currentQuestion], [section, currentQuestion]);
    const totalQuestions = useMemo(
        () => surveyData.sections.reduce((total, section) => total + section.questions.length, 0),
        []
    );
    const questionNumber = useMemo(
        () =>
            surveyData.sections
                .slice(0, currentSection)
                .reduce((total, section) => total + section.questions.length, 0) +
            currentQuestion +
            1,
        [currentSection, currentQuestion]
    );

    const handleOptionChange = (points, index) => {
        const currentKey = `${currentSection}-${currentQuestion}`;
        const isSingleOption = question.type === 'single';

        setSelectedOptions((prev) => {
            if (isSingleOption) {
                return {
                    ...prev,
                    [currentKey]: [{ points, index }]
                };
            } else {
                const updatedOptions = prev[currentKey] || [];
                const isChecked = updatedOptions.some((opt) => opt.index === index);

                if (isChecked) {
                    return {
                        ...prev,
                        [currentKey]: updatedOptions.filter((opt) => opt.index !== index)
                    };
                } else {
                    return {
                        ...prev,
                        [currentKey]: [...updatedOptions, { points, index }]
                    };
                }
            }
        });

        // Clear error message when an option is selected
        setError('');
    };

    const calculateTotalScore = () => {
        let totalScore = 0;
        for (const key in selectedOptions) {
            totalScore += selectedOptions[key].reduce((acc, opt) => acc + opt.points, 0);
        }
        return totalScore;
    };

    const handleNext = () => {
        const currentKey = `${currentSection}-${currentQuestion}`;
        const isOptionSelected = selectedOptions[currentKey] && selectedOptions[currentKey].length > 0;

        if (!isOptionSelected) {
            setError('Please select at least one option to proceed.');
            return;
        }

        const updatedScore = calculateTotalScore();

        if (currentQuestion < section.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (currentSection < surveyData.sections.length - 1) {
            setCurrentSection(currentSection + 1);
            setCurrentQuestion(0);
        } else {
            navigate('/capture/surveyend', {
                state: { interimScore: updatedScore }
            });
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

    const optionClass = question.options.length > 3 ? 'options-grid' : 'options-single-column';

    return (
        <div className="survey-container">
            <h2 className="internalcommunication">{section.title}</h2>
            <p className="questionNumber">
                Question {questionNumber}/{totalQuestions}:
            </p>
            <p className="question">{question.question}</p>
            <div className={optionClass}>
                {question.options.map((option, index) => (
                    <div key={index} className="option">
                        <input
                            type={question.type === 'single' ? 'radio' : 'checkbox'}
                            name={`question-${currentSection}-${currentQuestion}`}
                            value={option.points}
                            id={`option-${index}`}
                            checked={
                                selectedOptions[`${currentSection}-${currentQuestion}`]?.some(
                                    (opt) => opt.index === index
                                ) || false
                            }
                            onChange={() => handleOptionChange(option.points, index)}
                        />
                        <label htmlFor={`option-${index}`}>{option.text}</label>
                    </div>
                ))}
            </div>
            {error && <p className="form-error-message">{error}</p>}
            <div className="navigation">
                {!(currentSection === 0 && currentQuestion === 0) && (
                    <button className="previous" onClick={handlePrevious}>
                        Previous
                    </button>
                )}
                <button className="next" onClick={handleNext}>
                    {currentSection === surveyData.sections.length - 1 &&
                    currentQuestion === section.questions.length - 1
                        ? 'Get Results'
                        : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default SurveyPage;
