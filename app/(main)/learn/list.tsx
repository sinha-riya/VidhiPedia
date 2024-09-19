"use client";

import React from 'react';
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

const ages: Age[] = [
  {
    id: 1,
    title: "Kid",
    imageSrc: "./kid.png",
    description: "New to Constitution? Let's learn together.",
    linkPage: "/learn/kid"
  },
  {
    id: 2,
    title: "Teen",
    imageSrc: "./teen.png",
    description: "A New way to learn about Constitution for teenagers.",
    linkPage: "/learn/teen"
  },
  {
    id: 3,
    title: "Adult",
    imageSrc: "./adult.png",
    description: "Let's see how much you know about Constitution.",
    linkPage: "/learn/adult"
  }
];

const ListPage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <img src={age.imageSrc} alt={age.title} className="w-full h-full object-cover" />
              <h2 className="text-xl font-semibold mt-2">{age.title}</h2>
            </CardHeader>
            <CardContent>
              <p>{age.description}</p>
            </CardContent>
            <CardFooter>
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