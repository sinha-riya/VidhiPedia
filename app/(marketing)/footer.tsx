import React from 'react';
import { Button } from "@/components/ui/button";
import { Ghost } from 'lucide-react';
import Link from 'next/link';



const Footer: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white text-center py-4">
            <Link href="/">
                <Button size="lg" variant="ghost">English</Button>
            </Link>
            <Link href="/hindi">
                <Button size="lg" variant="ghost">हिन्दी</Button>
            </Link>
            <Link href="/kannada">
                <Button size="lg" variant="ghost">ಕನ್ನಡ</Button>
            </Link>
            <Button size="lg" variant="ghost">भोजपुरी</Button>
            <Button size="lg" variant="ghost">தமிழ்</Button>
            <Button size="lg" variant="ghost">മലയാളം</Button>
            <Button size="lg" variant="ghost">বাংলা</Button>
            <Button size="lg" variant="ghost">ગુજરાતી</Button>
            <Button size="lg" variant="ghost">मराठी</Button>
            <Button size="lg" variant="ghost">ଓଡ଼ିଆ</Button>
        
        </header>
    );
};

export default Footer;