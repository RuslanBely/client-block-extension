import { useRemoveBlockItemMutation } from '@/entities/block-list/queries';
import { AddBlockItemDtoType } from '@/shared/api/generated';

export function BlockItem({
  data,
  id,
  type,
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}) {
  const removeBLockItemMutation = useRemoveBlockItemMutation();

  const handleRemove = () => {
    removeBLockItemMutation.mutate(id);
  };

  return (
    <div className="flex gap-2">
      <div>
        <div className="tesx-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
      <button
        className="ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50"
        onClick={handleRemove}
        disabled={removeBLockItemMutation.isPending}
      >
        <GarbageBasket className='w-6 h-6' />
      </button>
    </div>
  );
}

const GarbageBasket = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5 21V6H4V4h5V3h6v1h5v2h-1v15H5Zm2-2h10V6H7v13Zm2-2h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
    />
  </svg>
);
