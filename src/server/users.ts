'use server';

import { auth } from '@/lib/auth';

type SignUpParams = { email: string; password: string; username: string };
type SignInParams = { email: string; password: string };

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    // TODO: Return zod erros to show in the UI
    return {
      success: true,
      message: 'Signed in successfully.',
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message: e.message || 'An unknown error occurred.',
    };
  }
};

export const signUp = async ({ email, password, username }: SignUpParams) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: username,
      },
    });

    return {
      success: true,
      message: 'Signed up successfully.',
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message: e.message || 'An unknown error occurred.',
    };
  }
};
