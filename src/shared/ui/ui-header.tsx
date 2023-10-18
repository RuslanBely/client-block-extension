import clsx from 'clsx';
import { UiLogo } from './ui-logo';
import { ReactNode } from 'react';

export function UiHeader({
  className, right
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        'flex items-center justify-center border-b border-b-slate-300 px-4 py-5 bg-white',
        className,
      )}
    >
      <UiLogo></UiLogo>
      {right}
    </header>
  );
}
