import { ReactNode } from 'react';

export function UiFormPageLayout({
  title,
  form,
  header,
}: {
  header?: ReactNode;
  form?: ReactNode;
  title: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {header}
      <main className="flex grow flex-col pt-24">
        <div className="w-full max-w-[400px] self-center rounded-xl border border-slate-300 bg-white px-14 py-8 pb-16">
          <h1 className="mb-7 text-2xl">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
}
