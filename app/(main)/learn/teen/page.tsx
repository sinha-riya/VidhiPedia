"use client";
import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import React, { use } from 'react';
import { useState } from 'react';
//import { Header } from '@/learn/header';
//import { UserProgress } from '@/components/user-progress';
import { title } from 'process';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetClose, SheetContent, SheetOverlay, SheetPortal } from '@/components/ui/sheet';


const AdultPage = () => {
  const [buttonVariant, setButtonVariants] = useState<{ [key: string]: string }>({});

  const handleButtonClick = (key: string) => {
    setButtonVariants((prevVariants) => ({
      ...prevVariants,
      [key]: 'primary',
    }));
  };
  

  return (
    <div>
      <div className="top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-10 text-neutral-400 lg:z-50">
        <Link href="/age">
          <Button variant="ghost" size="sm">
            <ArrowLeft className=" ml-10 h-5 w-5 stroke-2 text-neutral-400" />
          </Button>
        </Link>
        <h1 className="font-bold text-lg">
          Teen
        </h1>
        <div />
      </div>
    
      <div className='flex flex-row-reverse gap-[48px] px-6'>
        <FeedWrapper>
          <div className="mb-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="learning">What exactly is a constitution?</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='text-2xl'>What is a Constitution?</SheetTitle>
                  <SheetDescription className='text-lg'>
                  <div className='mb-2'>
                  A constitution is like a big rulebook for the whole country. It tells everyone how the country should be run, what the government can do, and what rights people have. It makes sure everyone is treated fairly and that the rules are followed by everyone, including leaders.
                  </div>
                  <div className='mb-8'>
                  <Link href="https://sansad.in/ls/about/introduction" target="_blank" rel="noopener noreferrer">
                    <h2 className="text-blue-500">Article: What is Constitution</h2>
                  </Link>
                  </div>
                  <div className='mb-4'>
                  <iframe width="320" height="180" src="https://www.youtube.com/embed/sDstf8ockUo?si=RPwBoMrj5-ou0avq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                  <Button type="submit" variant="secondary" onClick={() => handleButtonClick('constitution')}>Understood</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="mb-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="learning">Introducing the Indian Constitution</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='text-2xl'>Now what's the Indian Constitution?</SheetTitle>
                  <SheetDescription className='lg'>
                  The Indian Constitution is the main set of rules for India. It tells us how the government should work and what rights we have as citizens. It's the longest written constitution in the world and helps make sure that India runs smoothly, with fairness and justice for everyone.

                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Understood</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Who made it?</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Who made the Indian Constitution and why?</SheetTitle>
                    <SheetDescription>
                    The Indian Constitution was made by a group of people called the Constituent Assembly, led by Dr. B. R. Ambedkar. They created it after India became independent to make sure the country would be fair and democratic. They wanted everyone in India to have equal rights and opportunities.

                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Understood</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">When was it made?</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>When was the Indian Constitution made</SheetTitle>
                    <SheetDescription>
                    The Constitution was written between 1946 and 1949. It was officially adopted on November 26, 1949, and became the law on January 26, 1950. This day is now celebrated as Republic Day in India, marking the start of our nation's journey as a republic.

                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Understood</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mb-10">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">What is an Article?</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>What is an Article?</SheetTitle>
                    <SheetDescription>
                    Articles are like the different rules written in the Constitution. Each article talks about a specific part of how the country should be run. When the Indian Constitution was first written, it had 395 articles. These articles help make sure everything is organized and fair.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Understood</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mb-10">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">The first page</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>What's in the first page of the Indian constitution</SheetTitle>
                    <SheetDescription>
                    The first page of the Constitution has something called the Preamble. The Preamble is like a promise that India will be a country where everyone is treated equally, and where there is justice, liberty, and fairness for all. It describes India as a country that's democratic and peaceful.

                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Understood</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Rights</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>What exactly are rights?</SheetTitle>
                    <SheetDescription>
                    Rights are special freedoms and protections that every person has. In India, these are called Fundamental Rights, like the Right to Equality (everyone is treated the same) and the Right to Freedom (you can speak and do things freely). These rights help make sure people are treated fairly.


                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Understood</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">What is the need?</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Why do we need the Indian Constitution?</SheetTitle>
                    <SheetDescription>
                    We need the Indian Constitution to keep everything in order. It helps the government do its job, protects our rights, and makes sure the country stays fair and just. Without it, there wouldn’t be clear rules for how the country should be run or how people should be treated.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit"  variant={buttonVariant} onClick={handleButtonClick}>Understood</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </FeedWrapper>
      </div>
    </div>
  );
}

export default AdultPage;