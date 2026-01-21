import './FormBlock.css';
import Input from './Input';
import { FORM_BLOCKS, BTN_TYPES } from '../../config/cvForm';
import { Button } from '../Button/Button.jsx';
import ImageUpload from './ImageUpload.jsx';

export default function SimpleFormBlock({
  title,
  inputs,
  showSaveButton = true,
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

        {showSaveButton && <Button type="submit" btnText={BTN_TYPES.SAVE} />}
      </form>
    </div>
  );
}
