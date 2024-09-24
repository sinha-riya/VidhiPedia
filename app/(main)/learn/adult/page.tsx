
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
          Adult
        </h1>
        <div />
      </div>
    
      <div className='flex flex-row-reverse gap-[48px] px-6'>
        <FeedWrapper>
          <div className="mb-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="learning">Well, What is constitution anyway?</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='text-2xl'>What is Constitution?</SheetTitle>
                  <SheetDescription className='text-xl'>
                  The Constitution is the supreme law of the land, establishing the framework for government, outlining citizens' rights and duties, and balancing power across different branches of government. It ensures democracy and protects individual freedoms through a system of checks and balances.

                  <Link href="https://sansad.in/ls/about/introduction">
                    <h2 className="text-blue-500">Article: What is Constitution</h2>
                  </Link>
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
          <div className="mb-10 gap-4">
            <div className="mb-10 gap-4">
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
            <div className="mb-10 gap-4">
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
            <div className="mb-10 gap-4">
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