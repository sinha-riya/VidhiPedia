"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ConstitutionDraft = () => {
    const [currentNode, setCurrentNode] = useState('start');
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

    let currentDraftNode: {
        title?: string;
        description?: string;
        text?: string;
        outcome?: string;
        choices?: { [key: string]: { text: string; nextNode: string } };
        image?: string;
    } = {};

    // Define different constitutional drafting stages
    if (currentNode === 'start') {
        currentDraftNode = {
            title: "Preamble Draft for 'Nova Republic'",
            description: "You are tasked with drafting the Preamble. What values should the Preamble include?",
            image: "law.png",
            choices: {
                A: { text: "Liberty, Equality, Fraternity", nextNode: "liberty" },
                B: { text: "Justice, Sovereignty, Democracy", nextNode: "justice" }
            },
        };
    } else if (currentNode === 'liberty') {
        currentDraftNode = {
            text: "You have chosen to include Liberty, Equality, and Fraternity. How do you want to structure these values?",
            choices: {
                A1: { text: "Ensure fundamental rights are focused on liberty", nextNode: "rightsLiberty" },
                A2: { text: "Promote social equality above all", nextNode: "socialEquality" }
            },
            image: "/dr1.png"
        };
    } else if (currentNode === 'justice') {
        currentDraftNode = {
            text: "You opted for Justice, Sovereignty, and Democracy. What's your next step?",
            choices: {
                B1: { text: "Draft detailed justice systems", nextNode: "justiceSystem" },
                B2: { text: "Focus on strong democratic frameworks", nextNode: "democraticFramework" }
            },
            image: "sample.png"
        };
    } else if (currentNode === 'rightsLiberty') {
        currentDraftNode = {
            text: "Your focus on liberty has led to an expansive bill of rights. What specific rights will you emphasize?",
            choices: {
                A1_1: { text: "Freedom of Speech, Expression", nextNode: "speechRights" },
                A1_2: { text: "Right to Privacy", nextNode: "privacyRights" }
            },
            image: "sample.png"
        };
    } else if (currentNode === 'socialEquality') {
        currentDraftNode = {
            text: "Social equality is central. What measures will you take to enforce equality?",
            choices: {
                A2_1: { text: "Affirmative actions for minorities", nextNode: "affirmativeAction" },
                A2_2: { text: "Equal pay for equal work", nextNode: "equalPay" }
            },
            image: "sample.png"
        };
    } else if (currentNode === 'justiceSystem') {
        currentDraftNode = {
            text: "You draft a robust justice system that ensures fairness. What pillar will you emphasize?",
            choices: {
                B1_1: { text: "Independence of the judiciary", nextNode: "independentJudiciary" },
                B1_2: { text: "Transparency in legal processes", nextNode: "transparency" }
            },
            image: "sample.png"
        };
    } else if (currentNode === 'democraticFramework') {
        currentDraftNode = {
            text: "You focus on building a strong democratic framework. How will elections be structured?",
            choices: {
                B2_1: { text: "Universal suffrage", nextNode: "universalSuffrage" },
                B2_2: { text: "Proportional representation", nextNode: "proportionalRepresentation" }
            },
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
            <h1 className="text-3xl text-center text-blue-500 font-bold mb-6">VidhiDraft</h1>
            <div className="mb-6">
                <>
                    <motion.div
                        key={currentNode}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currentDraftNode ? (
                            <Card className="p-4 max-w-lg mx-auto rounded-lg shadow-lg">
                                <CardHeader>
                                    {/* Draft title */}
                                    {currentDraftNode.title && (
                                        <CardTitle className="text-2xl font-bold mb-4">{currentDraftNode.title}</CardTitle>
                                    )}

                                    {/* Draft description */}
                                    {currentDraftNode.description && (
                                        <CardDescription className="text-xl mb-4 text-black">{currentDraftNode.description}</CardDescription>
                                    )}
                                </CardHeader>

                                <CardContent>
                                    {/* Draft text */}
                                    {currentDraftNode.text && (
                                        <p className="text-xl mb-4 items-center">{currentDraftNode.text}</p>
                                    )}

                                    {/* Outcome text */}
                                    {currentDraftNode.outcome && (
                                        <p className="text-lg mb-4 text-gray-700 items-center">{currentDraftNode.outcome}</p>
                                    )}
                                    
                                </CardContent>

                                <CardFooter>
                                    {/* Render choices if available */}
                                    {showChoices && currentDraftNode.choices && (
                                        <div className="flex flex-col flex-grow gap-4 text-center bg-transparent">
                                            {renderChoices(currentDraftNode.choices)}
                                        </div>
                                    )}
                                </CardFooter>
                            </Card>
                        ) : (
                            <p className="text-xl text-center text-red-500">Draft not found. Please restart the simulation.</p>
                        )}
                    </motion.div>
                </>
            </div>
        </div>
    );
};

export default ConstitutionDraft;
