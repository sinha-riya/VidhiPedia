
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
          Kid
        </h1>
        <div />
      </div>
    
      <div className='flex flex-row-reverse gap-[48px] px-6'>
        <FeedWrapper>
          <div className="mb-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="learning">Ever Heard about the word Constitution?</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='text-2xl'>What is Constitution?</SheetTitle>
                  <SheetDescription className='text-xl mb-10'>
                  The Constitution is like a big rulebook that tells us how our country should work. It helps everyone live together happily by giving rules about what is right and wrong, and it makes sure people are treated fairly.
                  
                  <Link href="https://sansad.in/ls/about/introduction">
                    <h2 className="text-blue-500">Article: What is Constitution</h2>
                  </Link>
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant={'secondary'} type="submit" className='mt-14 text-center'>Understood</Button>
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