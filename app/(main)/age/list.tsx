"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Age {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  linkPage: string;
}

export const ages: Age[] = [];

const List = () => {
  const [ageGroups, setAgeGroups] = useState<Age[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/agegroup');
      const data = await response.json();
      setAgeGroups(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ageGroups.map((age) => (
        <motion.div
        key={age.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Card key={age.id} className="shadow-lg">
          <CardHeader>
            <img src={age.imageSrc} alt={age.title} className="w-full h-full object-cover" />
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-bold">{age.title}</h2>
            <p>{age.description}</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href={age.linkPage}>
              <Button className="btn btn-primary" variant={'secondary'} >Let's Go</Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
      ))}
    </div>
  );
};

export default List;