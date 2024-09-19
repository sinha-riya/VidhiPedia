"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarItem } from './sidebar-item';
import SignupPage from '@/app/(main)/signup';
import LoginPage from '@/app/(main)/login';
import { useState } from 'react';
import { Button } from './ui/button';
import DarkModeToggle from './darkmode';
import { ScoreProvider } from './score';

type Props = {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className={cn(
      "flex h-full lg:w-[300px] lg:fixed left-0 top-0 px-4 shadow-2xl border-r-3 flex-col bg-orange-400 rounded-tr-3xl rounded-br-3xl",
      className
    )}>
      {/* Logo and Header */}
      <Link href="/">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo2.png"
            height={40}
            width={40}
            alt="Logo"
          />
          <h1 className="text-3xl font-bold text-white tracking-wide">
            VidhiPedia
          </h1>
        </div>
      </Link>

      {/* Sidebar Items */}
      <div className='flex flex-col gap-y-2 flex-1 bg-orange-400 text-white'>
        <SidebarItem
          label="VidhiLearn"
          href="/learn"
          iconSrc="/constitution.png"
        />
        <SidebarItem
          label="VidhiQuiz"
          href="/quiz"
          iconSrc="/quiz.png"
        />
        <SidebarItem
          label="VidhiStory"
          href="/story"
          iconSrc="/story.png"
        />
        <SidebarItem
          label="VidhiDraft"
          href="/simulation"
          iconSrc="/draft.png"
        />
        <SidebarItem
          label="VidhiForum"
          href="/forum"
          iconSrc="/chat.png"
        />
        <SidebarItem
          label="VidhiBoard"
          href="/leaderboard"
          iconSrc="/podium.png"
        />
      </div>
      <div className="sidebar-user mt-4 mb-6 flex flex-col">
        <Button variant="superOutline" className="flex text-orange-600">
          <img
            src="/score.png"
            alt="Score"
            className="w-10 h-10 rounded-full mr-2"
          />
          100
        </Button>
      </div>
    </div>
  )
}




/*<div className="sidebar-user mt-4 mb-6 flex flex-col">
      <Button variant="ghost" href="/login" className="flex text-white hover:text-orange-600">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          The Citizen of India
        </Button>
      </div>*/