interface Props {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function AuthInput({
  type,
  name,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
      w-full
      rounded-xl
      border
      border-slate-300
      bg-white/80
      px-4
      py-4
      outline-none
      backdrop-blur-lg
      transition
      focus:border-indigo-500
      focus:ring-2
      focus:ring-indigo-200
      "
    />
  );
}

export default AuthInput;