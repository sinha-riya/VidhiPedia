"use client";

import React, { useState } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
//import { Toast, ToastProvider } from '@/components/ui/toast';
//import { useToast } from '@/hooks/use-toast';
import { Toaster, toast } from 'sonner';
import { useScore } from '@/components/score';


type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
explanation: string;
};

const quizData: Question[] = [
  {
    question: 'If the Indian Constitution had a social media profile, what would its bio say?',
    options: ['"Just here to keep the peace ✌️"', '"Protecting your rights since 1950 👊"', '"DM me for equality! 🗣️"', '"Loves long walks through history 📜"'],
    correctAnswer: '"Protecting your rights since 1950 👊"',
    explanation: "“Constitutional Remedies” sounds like a superhero who swoops in to save the day when your rights are violated!"
  },
  {
    question: 'What is the best way to describe the Constitution in one word?',
    options: ['Bossy', 'Chill', 'Fair', 'Mysterious'],
    correctAnswer: 'Fair',
    explanation: "The Constitution is like a referee in a game, making sure everyone plays fair."
  },
  {
    question: 'What does ‘Liberty’ allow you to do?',
    options: ['Pick your favorite ice cream flavor', 'Choose what you want to say and do', 'Watch TV all day', 'Choose the color of your shoes'],
    correctAnswer: 'Choose what you want to say and do',
    explanation: "Liberty gives you the freedom to make your own choices, as long as they don’t hurt others."
  },
  {
    question: 'What would happen if there was no Constitution?',
    options: ['Chaos everywhere', 'Endless fun with no rules', 'No school ever again', 'Free candy for everyone'],
    correctAnswer: 'Chaos everywhere',
    explanation: "Without the Constitution, there would be no rules to keep things fair, leading to chaos everywhere!"
  },
  {
    question: 'What does ‘Justice’ mean in the Constitution?',
    options: ['Getting extra dessert', 'Everyone getting what they deserve', 'Being the fastest runner', 'Always winning games'],
    correctAnswer: 'Everyone getting what they deserve',
    explanation: "Justice in the Constitution means making sure everyone is treated fairly and gets what they deserve!"
  },
  // Add more questions as needed
];

const QuizPage = () => {
    // State to keep track of the user's score
    const [score, setScore] = useState(0);
    // State to keep track of the selected answers
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    // State to determine if the results should be shown
    const [showResults, setShowResults] = useState(false);
    // State to keep track of the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // State to determine if an answer has been selected
    const [answerSelected, setAnswerSelected] = useState(false);

    // Function to handle when an answer option is clicked
    const handleAnswerClick = (option: string) => {
        if (showResults) return;

        // Update the selected answers
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

    // Function to handle when the submit button is clicked
    const handleSubmit = () => {
        setShowResults(true);
        toast.info(`Your final score is ${score}`, {
            duration: 5000,
            style: { fontSize: '20px' },
        });
    };

    // Function to handle when the next question button is clicked
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswerSelected(false); // Reset for the next question
        }
    };

    // Function to handle when the previous question button is clicked
    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setAnswerSelected(false); // Reset for the previous question
        }
    };

    // Function to handle when the page is changed via pagination
    const handlePageChange = (page: number) => {
        setCurrentQuestionIndex(page - 1);
        setAnswerSelected(false); // Reset for the next question
    };

    // Function to get the class for an option based on its state
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

    const handleQuizCompletion = (newScore: number) => {
        setScore(newScore);
        setShowResults(true);
      };

    // Calculate the progress value for the progress bar
    const progressValue = ((currentQuestionIndex + 1) / quizData.length) * 100;

    return (
        <>
            <Toaster position="top-right" />
            <div className="p-4 ml-8">
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
                {answerSelected && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <p>{quizData[currentQuestionIndex].explanation}</p>
                </div>
                )}
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
                            onClick={() => handleQuizCompletion(10)}
                            variant={'secondary'}
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