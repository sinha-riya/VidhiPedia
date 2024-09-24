"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define the Age interface to type the age-related data
interface Age {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
    linkPage: string;
}

// Array of age categories with their respective data
const ages: Age[] = [
  {
    id: 1,
    title: "Kid",
    imageSrc: "./kid.png",
    description: "Set the rules of the game!",
    linkPage: "/story/kid"
  },
  {
    id: 2,
    title: "Teen",
    imageSrc: "./teen.png",
    description: "Draft your own constitution!",
    linkPage: "/simulation/teen"
  },
  {
    id: 3,
    title: "Adult",
    imageSrc: "./adult.png",
    description: "Dr. Ambedkar 2.0",
    linkPage: "/story/adult"
  }
];

// Functional component to render the list of quiz categories
const ListPage = () => {
  return (
    <div className="p-4">
      {/* Grid container for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Map through the ages array to create a card for each age category */}
        {ages.map((age) => (
          <motion.div
          key={age.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card key={age.id} className="shadow-lg">
            <CardHeader>
              {/* Image and title for the card */}
              <img src={age.imageSrc} alt={age.title} className="w-full h-full object-cover" />
              <h2 className="text-xl font-semibold mt-2">{age.title}</h2>
            </CardHeader>
            <CardContent>
              {/* Description of the age category */}
              <p>{age.description}</p>
            </CardContent>
            <CardFooter>
              {/* Link to the quiz page for the age category */}
              <Link href={age.linkPage}>
                <Button variant="primary">Let's Begin</Button>
              </Link>
            </CardFooter>
          </Card>
          </motion.div>

        ))}
      </div>
    </div>
  );
};

export default ListPage;