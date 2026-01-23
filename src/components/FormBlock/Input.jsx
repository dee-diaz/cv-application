import { useState } from "react";

export default function Input({ as: Component = 'input', label, id, onChange, ...rest }) {
  return (
    <label>
      {label && <span>{label}</span>}
      {label === 'Skills' && (
        <p id="skills-help">
          List your most relevant skills. Separate with commas.
        </p>
      )}
      <Component 
        id={id} 
        name={rest.name ?? id} 
        {...rest} 
        onChange={onChange} 
      />
    </label>
  );
}