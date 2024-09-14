import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-grow bg-white text-black p-40 w-screen items-center text-center">
        <h1 className="text-5xl font-bold text-orange-400 mb-6 text-center">विधिपीडिया</h1>
        <p className="text-2xl text-green-400 mb-10 text-center">संविधान, सरलीकृत
        </p>

        <Link href="/age" passHref>
          <Button variant={"secondary"}>
            आएँ शुरू करें
          </Button>
        </Link>

        <div className="mt-10 text-sm text-gray-400 place-content-end self-end text-center">
            क्या आप जानते हैं: अनुच्छेद 32 को संविधान का "हृदय और आत्मा" कहा जाता है।
        </div>
      </div>
    </div>
  );
}