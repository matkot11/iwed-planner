'use client';

import { signUp } from '@/app/lib/auth/signUp';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useActionState } from 'react';

export default function SignUpPage() {
  const [state, action, pending] = useActionState(signUp, undefined);

  return (
    <div className="bg-pink flex h-screen flex-col">
      <h1 className="m-auto font-[poppins] text-3xl font-medium text-white">SIGN UP</h1>

      <form
        action={action}
        className="flex h-max flex-col gap-4 rounded-tl-4xl bg-white px-12 py-12"
      >
        <Input
          name="name"
          label="Name:"
          placeholder="Enter your name"
          error={state?.errors?.name?.[0]}
        />

        <Input
          name="email"
          label="Email:"
          type="mail"
          placeholder="Enter your email"
          error={state?.errors?.email?.[0]}
        />

        <Input
          name="password"
          label="Password:"
          type="password"
          placeholder="Enter your password"
          error={state?.errors?.password?.[0]}
        />

        <Input
          name="confirmPassword"
          label="Confirm Password:"
          type="password"
          placeholder="Confirm your password"
          error={state?.errors?.confirmPassword?.[0]}
        />

        <Button disabled={pending} className="mt-4">
          SIGN UP
        </Button>

        {state?.message && <span className="font-poppins ml-2 text-xs text-red-600">{state?.message}</span>}
      </form>
    </div>
  );
}
