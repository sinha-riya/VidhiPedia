import { Button } from "@/components/ui/button";
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-grow bg-white text-black p-40  items-center text-center m-10">
        <h1 className="text-5xl font-bold text-orange-400 mb-6 text-center">VidhiPedia</h1>
        <p className="text-2xl text-green-400 mb-10 text-center">Constitution, Simplified</p>
        <div>
        <Link href="/age" passHref>
          <Button variant={"primary"}>
            Start Learning
          </Button>
        </Link>
        </div>
        <div>
          <RegisterLink>
          <Button variant={"secondary"} className="mb-4 mt-4">
           Sign Up
          </Button>
          </RegisterLink>
          <Link href="/login" passHref>
            <Button variant={"secondaryOutline"}>
           Log in
          </Button>
          </Link>
        </div>
          
        <div className="mt-10 text-sm text-gray-400 place-content-end self-end text-center">
          Did You Know: Article 32 is called the "Heart and Soul" of the Constitution.
        </div>
      </div>
    </div>
  );
}