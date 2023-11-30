import React, { useState } from 'react';
import '../../App.css'

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const questions = [
      {
          questionText: 'Would you like to meet someone in person?',
          name: 'meetInPerson',
          options: ['Yes', 'No Preference', 'No'],
      },
      {
        questionText: 'What kind of topics are you struggling with, or have interest in finding resources for?',
        name: 'stuggles',
        options: ['Eating disorder', 'Despression', 'Anxiety'],
      },
      {
        questionText: 'Are you interested in paid services?',
        name: 'paidServices',
        options: ['Yes', 'No, only free'],
      },
      {
        questionText: 'Are you a student athlete?',
        name: 'studentAthlete',
        options: ['Yes', 'No'],
      },
      {
        questionText: 'Have you seen a therapist, or used other mental health services in the past?',
        name: 'previousExperience',
        options: ['Yes', 'No'],
      },
      {
        questionText: 'Would you say you require urgent help?',
        name: 'urgentHelp',
        options: ['Yes', 'No'],
      },
    ];

    const handleOptionClick = (questionName, option) => {
        setAnswers({
            ...answers,
            [questionName]: option,
        });
    };

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleBackClick = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(answers);
        // Process submission here
    };


    const renderQuestion = (question, index) => {
        return (
            <div className={index === currentQuestionIndex ? 'question active' : 'question'} key={index}>
                <p>{question.questionText}</p>
                <div className="options">
                    {question.options.map((option) => (
                        <button
                            type="button"
                            className={answers[question.name] === option ? 'option selected' : 'option'}
                            key={option}
                            onClick={() => handleOptionClick(question.name, option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
      
        <div className="quiz-container">
            <h1>Quiz: University</h1>
            <p>Let's get you in the right direction!</p>
            <form onSubmit={handleSubmit}>
                {questions.map(renderQuestion)}
                <div className="footer-box">
                  <div className="navigation-buttons">
                      {currentQuestionIndex > 0 && (
                          <button type="button" onClick={handleBackClick}>Back</button>
                      )}
                      {currentQuestionIndex < questions.length - 1 ? (
                          <button type="button" onClick={handleNextClick}>Continue</button>
                      ) : (
                          <button type="submit">Submit</button>
                      )}
                    </div>
                </div>
            </form>
        </div>
    );
}


export default Quiz;
