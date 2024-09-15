import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Age = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
};

type Props = {
  activeAgeId: number;
  points: number;
};

export const UserProgress = ({ activeAgeId, points }: Props) => {
  const [activeAge, setActiveAge] = useState<Age | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/age.json');
      const data = await response.json();
      const age = data.agegroup.find((age: Age) => age.id === activeAgeId);
      setActiveAge(age);
    };

    fetchData();
  }, [activeAgeId]);

  if (!activeAge) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeAge.imageSrc}
            alt={activeAge.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image 
            src="/points.svg" 
            height={28} 
            width={28}
            alt="Points"
          />
        </Button>
      </Link>
      <div className="flex items-center">
        <InfinityIcon className="text-orange-500" />
        <span className="ml-2">{points}</span>
      </div>
    </div>
  );
};