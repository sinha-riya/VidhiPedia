import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-grow bg-white text-black p-40 w-screen items-center text-center">
        <h1 className="text-5xl font-bold text-orange-400 mb-6 text-center">ವಿಧಿಪೀಡಿಯಾ</h1>
        <p className="text-2xl text-green-400 mb-10 text-center">ಸಂವಿಧಾನ, ಸರಳೀಕೃತ
        </p>

        <Link href="/age" passHref>
          <Button variant={"secondary"}>
            ಪ್ರಾರಂಭಿಸೋಣ
          </Button>
        </Link>

        <div className="mt-10 text-sm text-gray-400 place-content-end self-end text-center">
            ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ: ಆರ್ಟಿಕಲ್ 32 ಅನ್ನು ಸಂವಿಧಾನದ "ಹೃದಯ ಮತ್ತು ಆತ್ಮ" ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.
        </div>
      </div>
    </div>
  );
}