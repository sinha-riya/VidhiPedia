"use client";

import React, { useState } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Toaster, toast } from 'sonner';

// Define the type for a quiz question
type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
};

// Sample quiz data
const quizData: Question[] = [
    {
        question: 'The Preamble to the Constitution of India begins with the words “We, the people of India.” What does this phrase signify?',
        options: ['The unity and collective will of the citizens', 'The power of the government', 'The diversity of India', 'The authority of the President'],
        correctAnswer: 'The unity and collective will of the citizens',
        explanation: "The phrase “We, the people of India” signifies that the Constitution derives its authority from the people, emphasizing democracy and the collective will of the citizens."
    },
    {
        question: 'Which part of the Indian Constitution is often referred to as the ‘conscience’ of the Constitution?',
        options: ['The Preamble', 'Part III – Fundamental Rights', 'Part IV – Directive Principles of State Policy', 'Part V – The Union'],
        correctAnswer: 'Part III – Fundamental Rights',
        explanation: "Part III of the Constitution, which deals with Fundamental Rights, is often referred to as the ‘conscience’ of the Constitution because it safeguards the basic human rights of all citizens."
    },
    {
        question: 'Which Fundamental Right is considered the “heart and soul” of the Indian Constitution, as described by Dr. B.R. Ambedkar?',
        options: ['Right to Equality', 'Right to Freedom', 'Right to Constitutional Remedies', 'Right to Education'],
        correctAnswer: 'Right to Constitutional Remedies',
        explanation: "Dr. B.R. Ambedkar described the Right to Constitutional Remedies as the “heart and soul” of the Constitution because it allows citizens to approach the courts if any of their rights are violated."
    },
    {
        question: 'How does the Directive Principles of State Policy influence the governance of India?',
        options: ['They are legally enforceable by the courts', 'They are guidelines for the central and state governments', 'They determine the composition of the Parliament', 'They restrict the powers of the President'],
        correctAnswer: 'They are guidelines for the central and state governments',
        explanation: "The Directive Principles of State Policy are guidelines for the government to follow in making policies and laws. Although they are not legally enforceable, they are fundamental in the governance of the country."
    },
    {
        question: 'In the event of a conflict between Fundamental Rights and Directive Principles, which prevails according to the Indian Constitution?',
        options: ['Fundamental Rights always prevail', 'Directive Principles always prevail', 'The judiciary decides on a case-by-case basis', 'The Parliament decides'],
        correctAnswer: 'The judiciary decides on a case-by-case basis',
        explanation: "In cases where there is a conflict between Fundamental Rights and Directive Principles, the judiciary examines the case and decides the outcome based on the specific circumstances."
    },
    // Add more questions as needed
];

const QuizPage = () => {
    // State variables
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false);

    // Handle answer click
    const handleAnswerClick = (option: string) => {
        if (showResults) return;

        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = option;
        setSelectedAnswers(newSelectedAnswers);
        setAnswerSelected(true);

        // Check if the selected answer is correct
        if (option === quizData[currentQuestionIndex].correctAnswer) {
            setScore(score + 10);
            toast.success(`Correct Answer! Your score is now ${score + 10}`, {
                duration: 3000,
                style: { fontSize: '20px', color: 'green' },
            });
        } else {
            toast.error(`The correct answer was ${quizData[currentQuestionIndex].correctAnswer}`, {
                duration: 3000,
                style: { fontSize: '20px', color: 'red' },
            });
        }
    };

    // Handle quiz submission
    const handleSubmit = () => {
        setShowResults(true);
        toast.info(`Your final score is ${score}`, {
            duration: 5000,
            style: { fontSize: '20px' },
        });
    };

    // Handle next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswerSelected(false); // Reset for the next question
        }
    };

    // Handle previous question
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setAnswerSelected(false); // Reset for the previous question
        }
    };

    // Handle page change for pagination
    const handlePageChange = (page: number) => {
        setCurrentQuestionIndex(page - 1);
        setAnswerSelected(false); // Reset for the next question
    };

    // Get CSS class for option based on its state
    const getOptionClass = (option: string) => {
        if (showResults) {
            if (option === quizData[currentQuestionIndex].correctAnswer) {
                return 'bg-green-500 text-white';
            }
            if (selectedAnswers[currentQuestionIndex] === option) {
                return 'bg-red-500 text-white';
            }
        } else {
            if (selectedAnswers[currentQuestionIndex] === option) {
                return 'bg-blue-200';
            }
        }
        return '';
    };

    // Calculate progress value
    const progressValue = ((currentQuestionIndex + 1) / quizData.length) * 100;

    return (
        <>
            <Toaster position="top-right" />
            <div className="p-4">
                <h1 className="text-3xl text-center text-blue-500 font-bold mb-10">VidhiQuiz</h1>
                <Progress value={progressValue} className="mb-10" />
                <div className="mb-6">
                    <h2 className="text-xl mb-2">{quizData[currentQuestionIndex].question}</h2>
                    <div className="flex flex-col gap-4">
                        {quizData[currentQuestionIndex].options.map((option, optionIndex) => (
                            <button
                                key={optionIndex}
                                className={`p-2 border rounded ${getOptionClass(option)}`}
                                onClick={() => handleAnswerClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <Pagination
                    total={quizData.length}
                    current={currentQuestionIndex + 1}
                    onChange={handlePageChange}
                />
                <div className="flex justify-between mt-4 gap-4">
                    {answerSelected && (
                        <>
                            <Button
                                variant={'super'}
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestionIndex <= 0}
                            >
                                «
                            </Button>
                            <Button
                                variant={'super'}
                                onClick={handleNextQuestion}
                                disabled={currentQuestionIndex >= quizData.length - 1}
                            >
                                »
                            </Button>
                        </>
                    )}
                    <div className="flex justify-end w-full">
                        <Button
                            variant={'secondary'}
                            onClick={handleSubmit}
                            className=''
                        >
                            Submit
                        </Button>
                    </div>
                </div>
                {showResults && (
                    <div className="mt-4">
                        <h2 className="text-xl text-center">Congratulations, you have scored {score} points, Keep it up.👏👏👏</h2>
                    </div>
                )}
            </div>
        </>
    );
};

export default QuizPage;
