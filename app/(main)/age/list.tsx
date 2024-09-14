"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      ))}
    </div>
  );
};

export default List;