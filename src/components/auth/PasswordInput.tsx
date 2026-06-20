import {
  useState,
} from "react";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function PasswordInput({
  name,
  value,
  placeholder,
  onChange,
}: Props) {
  const [show, setShow] =
    useState(false);

  return (
    <div className="relative">
      <input
        type={
          show
            ? "text"
            : "password"
        }
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full
        rounded-xl
        border
        border-slate-300
        px-4
        py-4
        outline-none
        "
      />

      <button
        type="button"
        onClick={() =>
          setShow(!show)
        }
        className="
        absolute
        right-4
        top-5
        "
      >
        {show ? (
          <FaEyeSlash />
        ) : (
          <FaEye />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;