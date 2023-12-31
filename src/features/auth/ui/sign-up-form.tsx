import { ROUTES } from '@/shared/constants/routes';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLink } from '@/shared/ui/ui-link';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { useSignUpForm } from './model/use-sign-up-form';

export function SignUpForm() {
  const { handleSubmit, isPending, register, errorMessage } = useSignUpForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Email"
        inputProps={{ type: 'email', ...register('email', { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: 'password',
          ...register('password', { required: true }),
        }}
      />
      <UiButton disabled={isPending} variant="primary" className="mt-4">
        Sign Up
      </UiButton>
      <div className='flex justify-around pt-2'>
      <span className='py-1 text-gray-500'>Do you have account ?</span><UiLink href={ROUTES.SIGN_IN}>Sign In</UiLink>
      </div>
      {errorMessage && <div className='text-rose-500 text-center'>{errorMessage}</div>}
    </form>
  );
}
