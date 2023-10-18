import clsx from 'clsx';
import { error } from 'console';
import { PropsWithRef, SelectHTMLAttributes, useId } from 'react';

export type UiSelectOptions = {
  value: string;
  label: string;
};

export type UiSelectFieldProps = {
  className?: string;
  error?: string;
  label?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOptions[];
};

export function UiSelectField({
  className,
  error,
  label,
  selectProps,
  options,
}: UiSelectFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          'h-10 rounded border border-slate-300 px-2 outline-none focus:border-teal-600',
        )}
      >
        {options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-sm text-rose-400">{error}</div>}
    </div>
  );
}
