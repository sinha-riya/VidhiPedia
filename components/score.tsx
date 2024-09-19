import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ScoreContextProps {
  score: number;
  setScore: (score: number) => void;
}

const ScoreContext = createContext<ScoreContextProps | undefined>(undefined);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};