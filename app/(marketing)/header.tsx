import React from 'react';
import Image from 'next/image'; 



const Header: React.FC = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex justify-between items-start">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.png" alt="Vidhipedia" width={40} height={40} />
                    <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
                        VidhiPedia
                    </h1>
                </div>
                
            </div>
        </header>
    );
};

export default Header;


/*import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button"*/
/*<ClerkProvider>
                    <ClerkLoading>
                        <Loader  className="h-5 w-5 text-muted-foreground animate-spin"/>
                        </ClerkLoading>
                        <ClerkLoaded>
                        <SignedIn>
                            <UserButton 
                            afterSignOutUrl="/"
                            />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button size="lg" variant="ghost">
                                    Login
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
                </ClerkProvider>*/