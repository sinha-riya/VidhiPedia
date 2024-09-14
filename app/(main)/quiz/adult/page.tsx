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
};

// Sample quiz data
const quizData: Question[] = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        correctAnswer: 'Paris',
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
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
