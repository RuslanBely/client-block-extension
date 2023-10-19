import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { authControllerSignIn } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';

export function useSignInForm() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const router = useRouter();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signInMutation.error ? 'Sign in failed' : undefined;

  return {
    register,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    isPending: signInMutation.isPending,
    errorMessage,
  };
}
