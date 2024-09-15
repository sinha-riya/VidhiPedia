"use client";

import React from 'react';
import { Table as UITable, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

// Sample leaderboard data
const leader = [
  {
    "rank": 1,
    "username": "Its_Rahul",
    "points": 1580
  },
  {
    "rank": 2,
    "username": "Lonely_Star",
    "points": 1490
  },
  {
    "rank": 3,
    "username": "Mohit_123",
    "points": 1480
  },
  {
    "rank": 4,
    "username": "RizzLord",
    "points": 1360
  },
  {
    "rank": 5,
    "username": "My_GOAT_Antony",
    "points": 1300
  }
];

// LeaderTable component definition
const LeaderTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Title of the leaderboard */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Leaderboard</h1>
      
      {/* Table structure */}
      <UITable>
        <TableCaption>These people are balling. You should too.</TableCaption>
        
        {/* Table header */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-orange-600 text-xl text-center">Rank</TableHead>
            <TableHead className="text-green-600 text-xl">Username</TableHead>
            <TableHead className="text-right text-yellow-600 text-xl">Points</TableHead>
          </TableRow>
        </TableHeader>
        
        {/* Table body with dynamic rows */}
        <TableBody>
          {leader.map((entry) => (
            <TableRow key={entry.rank}>
              <TableCell className="font-medium text-center">{entry.rank}</TableCell>
              <TableCell>{entry.username}</TableCell>
              <TableCell className="text-right">{entry.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </UITable>
    </div>
  );
};

// Exporting the LeaderTable component as default
export default LeaderTable;