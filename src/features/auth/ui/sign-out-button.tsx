import { UiButton } from '@/shared/ui/ui-button';
import { useSignOut } from './model/use-sign-out';

export function SignOutButton() {
  const { isPending, signOut } = useSignOut();
  return (
    <UiButton disabled={isPending} onClick={() => signOut({})} variant="outlined">
      Sign Out
    </UiButton>
  );
}
