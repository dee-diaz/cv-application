import './FormBlock.css';
import { useState } from 'react';

export default function FormBlock({ title, inputs }) {
  const formId = title.toLowerCase().replace(' ', '-');
  const inputsArr = Object.values(inputs);
  return (
    <div className="form-block-wrapper">
      <form className={formId} name={formId} id={formId}>
        {inputsArr.map((input) => (
          <Input
            key={input.id}
            as={input.as}
            label={input.label}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
          />
        ))}
      </form>
    </div>
  );
}

function Input({ as: Component = 'input', label, type, id, placeholder }) {
  const [value, setValue] = useState('');

  return (
    <label>
      {label}
      <Component
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
