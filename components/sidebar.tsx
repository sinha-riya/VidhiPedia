
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import { SidebarItem } from './sidebar-item';
//import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';



type Props = {
  className?: string;
}

export const Sidebar = ({className}: Props) => {
  return (
    <div className={cn(
      "flex h-full lg:w-[300px] lg:fixed left-0 top-0 px-4 shadow-2xl border-r-3 flex-col bg-orange-400 rounded-tr-3xl rounded-br-3xl",
      className
    )}>
      <Link href="/age">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo.png"
            height={40}
            width={40}
            alt="Logo"
          />
          <h1 className="text-3xl font-bold text-white tracking-wide">
            VidhiPedia
          </h1>
        </div>
      </Link>

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

      <div className='p-4'>
        
      </div>
    </div>
  )
}
