export type InputProps<T extends React.ElementType = 'input'> = {
  as?: T;
  label?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<any>;
} & React.ComponentPropsWithoutRef<T>;


export default function Input<T extends React.ElementType = 'input'>({
  as,
  label,
  id,
  onChange,
  ...rest
}: InputProps<T>) {
  const Component = as || 'input';

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
        name={(rest as any).name ?? id}
        {...rest}
        onChange={onChange}
      />
    </label>
  );
}