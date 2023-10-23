import { useBlockListQuery } from '@/entities/block-list';
import { useDabaunceValue } from '@/shared/lib/react-std';
import { useState } from 'react';

export function useBlockItems() {
  const [q, setQ] = useState('');

  const blockListQuery = useBlockListQuery({ q: useDabaunceValue(q, 500) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isPending: blockListQuery.isPending, q, setQ };
}
