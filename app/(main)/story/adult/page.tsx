"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const StoryGame = () => {
  const [currentNode, setCurrentNode] = useState('scenario');
  const [showChoices, setShowChoices] = useState(false);

  // Handles updating the current node based on the choice made
  const handleChoiceClick = (nextNode: string) => {
    setCurrentNode(nextNode);
    setShowChoices(false); // Hide choices immediately after making a choice
  };

  const renderChoices = (choices: { [key: string]: { text: string; nextNode: string } }) => {
    return Object.keys(choices).map((key) => (
      <button
        key={key}
        className="p-2 border font-bold rounded bg-transparent text-black hover:bg-blue-400 focus:outline-none"
        onClick={() => handleChoiceClick(choices[key].nextNode)}
      >
        {choices[key].text}
      </button>
    ));
  };

  let currentStoryNode: {
    title?: string;
    description?: string;
    text?: string;
    image?: string;
    outcome?: string;
    choices?: { [key: string]: { text: string; nextNode: string } };
  } = {};

  if (currentNode === 'scenario') {
    currentStoryNode = {
      title: "The Leak",
      description: "Aarav, a young journalist, has received classified documents exposing a massive corruption scandal. How will he proceed?",
      image: "law1.png",
      choices: {
        A: { text: "Yes, I’ll publish it! It’s my fundamental right under Freedom of Speech (Article 19).", nextNode: "A" },
        B: { text: "No, I’ll hold off and investigate more before publishing.", nextNode: "B" }
      }
    };
  } else if (currentNode === 'A') {
    currentStoryNode = {
      text: "The story goes public, creating a huge uproar. Soon after, you receive a legal notice accusing you of defamation.",
      image: "law2.png",
      choices: {
        A1: { text: "Fight the legal battle.", nextNode: "A1" },
        A2: { text: "Settle out of court.", nextNode: "A2" }
      }
    };
  } else if (currentNode === 'A1') {
    currentStoryNode = {
      text: "The legal proceedings begin, and your resources are drained.",
      image: "law3.png",
      choices: {
        A1_1: { text: "Crowdfund your defense.", nextNode: "A1_1" },
        A1_2: { text: "Seek a pro bono lawyer.", nextNode: "A1_2" }
      }
    };
  } else if (currentNode === 'A1_1') {
    currentStoryNode = {
      text: "You raise enough funds, but it attracts more media attention, putting you under scrutiny.",
      image: "law4.png",
      choices: {
        A1_1_1: { text: "Continue the legal fight with public support.", nextNode: "A1_1_1" },
        A1_1_2: { text: "Settle the case out of court.", nextNode: "A1_1_2" }
      }
    };
  } else if (currentNode === 'A1_1_1') {
    currentStoryNode = {
      text: "Your supporter base grows, but pressure from the government increases.",
      image: "law5.png"
    };
  } else if (currentNode === 'A1_1_2') {
    currentStoryNode = {
      text: "You avoid court, but your credibility is damaged.",
      image: "law6.png"
    };
  } else if (currentNode === 'A1_2') {
    currentStoryNode = {
      text: "A high-profile lawyer takes your case, making it a national sensation.",
      image: "law7.png",
      choices: {
        A1_2_1: { text: "Use the platform to expose more corruption.", nextNode: "A1_2_1" },
        A1_2_2: { text: "Keep the focus on your defense.", nextNode: "A1_2_2" }
      }
    };
  } else if (currentNode === 'A1_2_1') {
    currentStoryNode = {
      text: "The legal proceedings become a stage for exposing deeper government involvement.",
      image: "law8.png"
    };
  } else if (currentNode === 'A1_2_2') {
    currentStoryNode = {
      text: "You stick to defending yourself, keeping the case focused on freedom of speech.",
      image: "law8.png"
    };
  } else if (currentNode === 'A2') {
    currentStoryNode = {
      text: "You avoid legal trouble, but public trust in your journalism diminishes.",
      image: "sample.png",
      choices: {
        A2_1: { text: "Move to safer stories.", nextNode: "A2_1" },
        A2_2: { text: "Quietly continue your investigation in secret.", nextNode: "A2_2" }
      }
    };
  } else if (currentNode === 'A2_1') {
    currentStoryNode = {
      text: "Your career continues, but the corruption story is soon forgotten.",
      image: "sample.png"
    };
  } else if (currentNode === 'A2_2') {
    currentStoryNode = {
      text: "You gather more evidence, but you're on the radar of officials.",
      image: "sample.png",
      choices: {
        A2_2_1: { text: "Leak new information anonymously.", nextNode: "A2_2_1" },
        A2_2_2: { text: "Seek international attention.", nextNode: "A2_2_2" }
      }
    };
  } else if (currentNode === 'A2_2_1') {
    currentStoryNode = {
      text: "You publish the findings anonymously, but are hunted by authorities.",
      image: "sample.png"
    };
  } else if (currentNode === 'A2_2_2') {
    currentStoryNode = {
      text: "You contact international organizations, exposing the scandal on a global stage.",
      image: "sample.png"
    };
  } else if (currentNode === 'B') {
    currentStoryNode = {
      text: "You decide to dig deeper, but the government begins to tighten security around those involved.",
      image: "sample.png",
      choices: {
        B1: { text: "Investigate undercover.", nextNode: "B1" },
        B2: { text: "Gather more evidence discreetly.", nextNode: "B2" }
      }
    };
  } else if (currentNode === 'B1') {
    currentStoryNode = {
      text: "You successfully infiltrate the network, but are noticed by one of the officials.",
      image: "sample.png",
      choices: {
        B1_1: { text: "Try to escape unnoticed.", nextNode: "B1_1" },
        B1_2: { text: "Confront the official.", nextNode: "B1_2" }
      }
    };
  } else if (currentNode === 'B1_1') {
    currentStoryNode = {
      text: "You manage to escape, but you're now on their radar.",
      image: "sample.png",
      choices: {
        B1_1_1: { text: "Continue investigating from a safe distance.", nextNode: "B1_1_1" },
        B1_1_2: { text: "Report the story with what you have.", nextNode: "B1_1_2" }
      }
    };
  } else if (currentNode === 'B1_1_1') {
    currentStoryNode = {
      text: "You gather evidence cautiously but under constant threat.",
      image: "sample.png"
    };
  } else if (currentNode === 'B1_1_2') {
    currentStoryNode = {
      text: "You publish the story with limited information, but risk not having enough evidence.",
      image: "sample.png"
    };
  } else if (currentNode === 'B1_2') {
    currentStoryNode = {
      text: "You confront the official, leading to a dangerous chase.",
      image: "sample.png",
      choices: {
        B1_2_1: { text: "Escape and go public.", nextNode: "B1_2_1" },
        B1_2_2: { text: "Seek help from allies.", nextNode: "B1_2_2" }
      }
    };
  } else if (currentNode === 'B1_2_1') {
    currentStoryNode = {
      text: "You escape and publish the story, but your safety is compromised.",
      image: "sample.png"
    };
  } else if (currentNode === 'B1_2_2') {
    currentStoryNode = {
      text: "You seek help from allies, gaining protection but escalating the conflict.",
      image: "sample.png"
    };
  } else if (currentNode === 'B2') {
    currentStoryNode = {
      text: "You gather more evidence, but the risk of exposure increases.",
      image: "sample.png",
      choices: {
        B2_1: { text: "Publish anonymously.", nextNode: "B2_1" },
        B2_2: { text: "Seek international attention.", nextNode: "B2_2" }
      }
    };
  } else if (currentNode === 'B2_1') {
    currentStoryNode = {
      text: "You publish the findings anonymously, but are hunted by authorities.",
      image: "sample.png"
    };
  } else if (currentNode === 'B2_2') {
    currentStoryNode = {
      text: "You contact international organizations, exposing the scandal on a global stage.",
      image: "sample.png"
    };
  }

  // Show choices after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts or currentNode changes
  }, [currentNode]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center text-blue-500 font-bold mb-6">VidhiStory</h1>
      <div className="mb-6">
      <>
      <motion.div
          key={currentNode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {currentStoryNode ? (
            <Card className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
              <CardHeader>
                {/* Story title */}
                {currentStoryNode.title && (
                  <CardTitle className="text-2xl font-bold mb-4">{currentStoryNode.title}</CardTitle>
                )}

                {/* Story description */}
                {currentStoryNode.description && (
                  <CardDescription className="text-xl mb-4 text-black">{currentStoryNode.description}</CardDescription>
                )}
                </CardHeader>

                <CardContent>
                {/* Story text */}
                {currentStoryNode.text && (
                  <p className="text-xl mb-4 items-center">{currentStoryNode.text}</p>
                )}

                {/* Image if available */}
                {currentStoryNode.image && (
                  <img src={`/${currentStoryNode.image}`} alt="Story" className="mb-4 w-full rounded-lg shadow" />
                )}

                {/* Outcome text */}
                {currentStoryNode.outcome && (
                  <p className="text-lg mb-4 text-gray-700 items-center">{currentStoryNode.outcome}</p>
                )}
                </CardContent>

                <CardFooter>
                {/* Render choices if available */}
                {showChoices && currentStoryNode.choices && (
                  <div className="flex flex-col flex-grow gap-4 text-center bg-transparent">
                  {renderChoices(currentStoryNode.choices)}
                  </div>
                )}
                </CardFooter>
                </Card>
                
        ) : (
          <p className="text-xl text-center text-red-500">Story node not found. Please restart the game.</p>
        )}
        </motion.div>
</>
      </div>
    </div>
  );
};

export default StoryGame;
