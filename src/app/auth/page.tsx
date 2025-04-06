'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center">
      <h1 className="m-auto font-[poppins] text-3xl font-medium">WELCOME</h1>

      <Image
        src="/authPagePeopleUnderTree.svg"
        alt="people"
        width={250}
        height={0}
        priority
        className="mt-auto h-auto"
      />

      <div className="bg-pink flex h-2/5 flex-col items-center justify-center gap-8 self-stretch rounded-t-4xl">
        <Button onClick={() => router.push('/auth/signup')}>SIGN UP</Button>
        <Button onClick={() => router.push('/auth/signin')} variant="secondary">
          SIGN IN
        </Button>
      </div>
    </div>
  );
}
