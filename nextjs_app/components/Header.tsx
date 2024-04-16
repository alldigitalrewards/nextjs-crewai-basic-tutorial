import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-black">
      <div className="mx-auto py-4 px-5 flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center text-white text-3xl font-bold cursor-pointer">
            <Image src="/logo.png" alt="CrewAI Logo" width={40} height={40} />
            <span className="ml-2">CrewAI</span>
          </div>
        </Link>
        <Link href="/settings" passHref>
          <span className="text-white text-lg cursor-pointer">Settings</span>
        </Link>
      </div>
    </div>
  );
}