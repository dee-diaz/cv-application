import './FormBlock.css';
import Input from './Input';
import { FORM_BLOCKS } from '../../config/cvForm';
import ImageUpload from './ImageUpload';
import type { InputProps } from './Input';

interface FormInput {
  id: string;
  label?: string;
  as?: 'input' | 'textarea';
  placeholder?: string;
  type?: string;
  name?: string;
  rows?: number;
  [key: string]: unknown;
}

interface SimpleFormBlockProps {
  title: string;
  inputs: Record<string, FormInput>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  onPhotoChange?: (file: File | null) => void;
}

export default function SimpleFormBlock({
  title,
  inputs,
  onChange,
  onSubmit,
  onPhotoChange,
} : SimpleFormBlockProps) {
  const formId = title.toLowerCase().replace(/\s+/g, '-');
  const inputsArr = Object.values(inputs);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    onSubmit?.(obj);
  }

  return (
    <div className="form-block-wrapper">
      {title === FORM_BLOCKS.GENERAL && (
        <ImageUpload formId={formId} onPhotoChange={onPhotoChange} />
      )}

      <form
        className={formId}
        name={formId}
        id={formId}
        onSubmit={handleSubmit}
      >
        {inputsArr.map((input) => (
          <Input key={input.id} onChange={onChange} {...input} />
        ))}
      </form>
    </div>
  );
}
