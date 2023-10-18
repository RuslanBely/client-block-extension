import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
  authControllerSignUp,
} from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';
import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiLink } from '@/shared/ui/ui-link';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { UiHeader } from '@/shared/ui/ui-header';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <UiHeader right={<div>{data?.email}</div>}></UiHeader>
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">hey</UiButton>
      <UiButton variant="outlined">Sign Out</UiButton>
      <UiButton disabled variant="primary">
        Sign Out
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: 'Enter email...' }}
      ></UiTextField>
      <UiTextField
        error="Text field"
        inputProps={{ placeholder: 'Enter email...' }}
      ></UiTextField>
      <UiTextField inputProps={{ placeholder: 'Enter email...' }}></UiTextField>
      <UiSelectField
        selectProps={{ placeholder: 'Enter email...' }}
        options={[{ value: '1', label: 'option' }]}
      ></UiSelectField>
      <UiLink href={'/'}>Some link</UiLink>
      <UiSpinner className="h-20 w-20 text-teal-600"></UiSpinner>
      {/* <UiPageSpinner></UiPageSpinner> */}
    </main>
  );
}
