type InputFormProps = {
  label: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const InputForm = ({ label, value, onChange }: InputFormProps) => {
  return (
    <label className="form__form-label">
      {label}:
        <input name={label} type="text" className="input-form" defaultValue={label} value={value} onChange={onChange} />
    </label>
  );
};
