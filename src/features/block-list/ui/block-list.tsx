import { UiTextField } from '@/shared/ui/ui-text-field';
import { useBlockItems } from '../model/use-block-items';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import { BlockItem } from './block-item';

export function BlockList({ className }: { className?: string }) {
  const { isPending, items, q, setQ } = useBlockItems();

  const isLoader = isPending;
  const isEmptyText = !isPending && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <UiTextField
        className="mb-2"
        label="Search"
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      ></UiTextField>
      <div className="flex flex-col gap-3 rounded-xl bg-slate-100/50 px-10 py-6">
        {isLoader && <UiSpinner className="mx-auto h-10 w-10 text-teal-600" />}
        {isEmptyText && <div className='text-xl py-3 text-center'>List is empty...</div>}
        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
