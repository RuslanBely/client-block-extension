import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { authControllerSignUp } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';

export function useSignUpForm() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = signUpMutation.error ? 'Sign up failed' : undefined;

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isPending: signUpMutation.isPending,
    errorMessage,
  };
}
