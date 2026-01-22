import './FormBlock.css';
import Input from './Input';
import { FORM_BLOCKS } from '../../config/cvForm';
import ImageUpload from './ImageUpload.jsx';

export default function SimpleFormBlock({
  title,
  inputs,
  onChange,
  onSubmit,
}) {
  const formId = title.toLowerCase().replace(/\s+/g, '-');
  const inputsArr = Object.values(inputs);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    onSubmit?.(obj);
  }

  return (
    <div className="form-block-wrapper">
      {title === FORM_BLOCKS.GENERAL && <ImageUpload formId={formId} />}

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
