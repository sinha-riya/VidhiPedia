"use client";

import React, { useState } from 'react';
import { Pagination } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
//import { Toast, ToastProvider } from '@/components/ui/toast';
//import { useToast } from '@/hooks/use-toast';
import { Toaster, toast } from 'sonner';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const quizData: Question[] = [
  {
    question: 'Who is known as the Father of the Indian Constitution?',
    options: ['Jawaharlal Nehru', 'B. R. Ambedkar', 'Sardar Vallabhbhai Patel', 'Mahatma Gandhi'],
    correctAnswer: 'B. R. Ambedkar',
  },
  {
    question: 'When did the Indian Constitution come into effect?',
    options: ['January 26, 1947', 'August 15, 1948', 'January 26, 1950', 'October 2, 1950'],
    correctAnswer: 'January 26, 1950',
  },
  {
    question: 'Which of the following is a Fundamental Right in the Indian Constitution',
    options: ['Right to Vote', 'Right to Equality', 'Right to Property', 'Right to Work'],
    correctAnswer: 'Right to Equality',
  },
  {
    question: 'How many articles are there in the Indian Constitution originally?',
    options: ['395', '300', '500', '450'],
    correctAnswer: '395',
  },
  {
    question: 'Who is the head of the Indian State',
    options: ['Prime Minister', 'Chief Minister', 'President', 'Governor'],
    correctAnswer: 'President',
  },
  {
    question: 'Which document is known as the Law of the Land',
    options: ['The Indian Penal Code','The Preamble','The Constitution','The Election Law'],
    correctAnswer: 'The Constitution',
  },
  {
    question: 'How many states are there in India',
    options: ['25','28','39','30'],
    correctAnswer: '28',
  },
  {
    question: 'What does the constitution of India proect?',
    options: ['Only the government','Only the rich','Rights of all citizens','Businesses'],
    correctAnswer: 'Right of all citizens',
  },
  {
    question: 'Who elects the president of India',
    options: ['The Parliament','The Prime Minister','The Citizens','The Government'],
    correctAnswer: 'The Parliament',
  },
  {
    question: 'What is the maximum term of the Indian Prime Minister',
    options: ['5 years','6 years','7 years','4 years'],
    correctAnswer: '5 years',
  },
  // Add more questions as needed
];

const QuizPage = () => {
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(false);
  
    const handleAnswerClick = (option: string) => {
      if (showResults) return;
  
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = option;
      setSelectedAnswers(newSelectedAnswers);
      setAnswerSelected(true);
  
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
  
    const handleSubmit = () => {
      setShowResults(true);
      toast.info(`Your final score is ${score}`, {
        duration: 5000,
        style: { fontSize: '20px' },
      });
    };
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerSelected(false); // Reset for the next question
      }
    };
  
    const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setAnswerSelected(false); // Reset for the previous question
      }
    };
  
    const handlePageChange = (page: number) => {
      setCurrentQuestionIndex(page - 1);
      setAnswerSelected(false); // Reset for the next question
    };
  
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
  
    const progressValue = ((currentQuestionIndex + 1) / quizData.length) * 100;
  
    return (
      <>
        <Toaster position="top-right" />
        <div className="p-4">
          <h1 className="text-3xl text-center text-blue-500 font-bold mb-10 ">VidhiQuiz</h1>
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