
import { StickyWrapper } from '@/components/sticky-wrapper';
import { FeedWrapper } from '@/components/feed-wrapper';
import React, { use } from 'react';
//import { Header } from '@/learn/header';
//import { UserProgress } from '@/components/user-progress';
import { title } from 'process';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetClose, SheetContent, SheetOverlay, SheetPortal } from '@/components/ui/sheet';


const AdultPage = () => {
  return (
    <div>
      <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-10 text-neutral-400 lg:z-50">
        <Link href="/age">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
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
                <Button variant="learning">The next topic is... Constitution?</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>What is Constitution?</SheetTitle>
                  <SheetDescription>
                  The Constitution is the highest set of rules in our country. It explains how the government works, what rights people have, and what responsibilities we all share. It’s like the foundation that makes sure everyone is treated equally and fairly.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant={'secondary'} type="submit">Understood</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="mb-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="learning">Another Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Another Title</SheetTitle>
                  <SheetDescription>
                    Another description here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Intro</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Another Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Another Title</SheetTitle>
                    <SheetDescription>
                      Another description here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mb-10">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Intro</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mb-10">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Another Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Another Title</SheetTitle>
                    <SheetDescription>
                      Another description here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Intro</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="learning">Another Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Another Title</SheetTitle>
                    <SheetDescription>
                      Another description here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
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