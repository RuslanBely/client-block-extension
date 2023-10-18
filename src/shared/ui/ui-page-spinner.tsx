import clsx from 'clsx';
import { UiSpinner } from './ui-spinner';

export function UiPageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-slate-100',
        className,
      )}
    >
      <UiSpinner className="h-24 w-24 text-teal-600" />
    </div>
  );
}
