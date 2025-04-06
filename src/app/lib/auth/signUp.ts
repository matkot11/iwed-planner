'use server';

import { z } from 'zod';
import { getUser } from './getUser';
import postgres from 'postgres';
import bcrypt from 'bcryptjs';
import { SignUpFormState } from './definitions';
import { redirect } from 'next/navigation';
import { signIn } from './auth';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'verify-full' });

export const signUp = async (state: SignUpFormState, formData: FormData) => {
  const validatedFields = z
    .object({
      name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
      email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
      password: z
        .string()
        .min(6, { message: 'Be at least 6 characters long.' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .trim(),
      confirmPassword: z.string(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: 'Passwords must match.',
      path: ['confirmPassword'],
    })
    .safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = validatedFields.data;

  const user = await getUser(email);

  if (user) {
    return {
      errors: {
        email: ['User with this email already exists'],
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;
    await signIn('credentials', formData);
    redirect('/dashboard');
  } catch (error) {
    console.log('error', error);
    return {
      message: 'Something went wrong',
    };
  }
};
