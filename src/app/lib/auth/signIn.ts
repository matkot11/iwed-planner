'use server';

import { AuthError } from 'next-auth';
import { signIn as signInNextAuth } from '@/app/lib/auth/auth';
import { SignInFormState } from './definitions';
import { redirect } from 'next/navigation';
export async function signIn(state: SignInFormState, formData: FormData) {
  try {
    await signInNextAuth('credentials', formData);
    redirect('/dashboard');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'Invalid credentials.',
          };
        default:
          return {
            message: 'Something went wrong.',
          };
      }
    }

    throw error;
  }
}
