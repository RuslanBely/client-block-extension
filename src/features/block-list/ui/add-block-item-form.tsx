import { UiSelectField } from '@/shared/ui/ui-select-field';
import { useAddBlockItemForm } from '../model/use-block-item-form';
import { UiTextField } from '@/shared/ui/ui-text-field';
import { UiButton } from '@/shared/ui/ui-button';
import { AddBlockItemDtoType } from '@/shared/api/generated';

const typeOptions = [
  { label: 'Website', value: AddBlockItemDtoType.Website },
  { label: 'KeyWord', value: AddBlockItemDtoType.KeyWord },
];

export function AddBlockItemForm() {
  const { handleSubmit, isPending, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="min-w-[50px]"
        selectProps={{ ...register('type') }}
        options={typeOptions}
      />
      <UiTextField
        inputProps={{
          placeholder: type === 'KeyWord' ? 'Enter Key Word' : 'Enter WebSite',
          ...register('data'),
        }}
      />
      <UiButton className='flex-2' variant="primary" disabled={isPending}>
        Add Block Item
      </UiButton>
    </form>
  );
}
