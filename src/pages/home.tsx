import { Inter } from 'next/font/google';
import { UiHeader } from '@/shared/ui/ui-header';
import { ToggleBlockingButton } from '@/features/toggle-blocking/ui/toggle-blocking-buton';
import { Profile } from '@/wigets/profile';
import { useBlockListQuery } from '@/entities/block-list';
import { AddBlockItemForm, BlockList } from '@/features/block-list';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const { data } = useBlockListQuery({});
  return (
    <div className={`flex min-h-screen flex-col`}>
      <UiHeader right={<Profile />}></UiHeader>
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="px-5 pt-10">
          <h1 className="mb-8 text-2xl">Block list</h1>
          <AddBlockItemForm />
          <BlockList className='mt-3' />
        </main>
      </div>
    </div>
  );
}
