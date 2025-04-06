'use client';
import { signIn } from '@/app/lib/auth/signIn';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useActionState } from 'react';

export default function SignInPage() {
  const [state, action, pending] = useActionState(signIn, undefined);

  return (
    <div className="bg-pink flex h-screen flex-col">
      <h1 className="m-auto font-[poppins] text-3xl font-medium text-white">SIGN IN</h1>

      <form
        action={action}
        className="flex h-max flex-col gap-4 rounded-tl-4xl bg-white px-12 py-12"
      >
        <Input name="email" label="Email:" type="mail" placeholder="Enter your email" />

        <Input
          name="password"
          label="Password:"
          type="password"
          placeholder="Enter your password"
        />

        <Button disabled={pending} className="mt-4">
          SIGN IN
        </Button>

        {state?.message && (
          <span className="font-poppins ml-2 text-xs text-red-600">{state?.message}</span>
        )}
      </form>
    </div>
  );
}
