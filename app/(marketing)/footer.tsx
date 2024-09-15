import React from 'react';
import { Button } from "@/components/ui/button";
import { Ghost } from 'lucide-react';
import Link from 'next/link';



const Footer: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white text-center py-4">
            <Button size="lg" variant="ghost">English</Button>
            <Link href="/hindi">
                <Button size="lg" variant="ghost">हिन्दी</Button>
            </Link>
            <Link href="/kannada">
                <Button size="lg" variant="ghost">ಕನ್ನಡ</Button>
            </Link>
            <Button size="lg" variant="ghost">भोजपुरी</Button>
            <Button size="lg" variant="ghost">தமிழ்</Button>
            <Button size="lg" variant="ghost">മലയാളം</Button>
        </header>
    );
};

export default Footer;