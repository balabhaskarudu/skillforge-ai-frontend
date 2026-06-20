interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search Questions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
      w-full
      rounded-xl
      border
      p-4
      "
    />
  );
}

export default SearchBar;
