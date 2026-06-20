interface Props {
  title: string;
  loading: boolean;
}

function AuthButton({
  title,
  loading,
}: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
      w-full
      rounded-xl
      bg-indigo-600
      py-4
      font-semibold
      text-white
      transition
      hover:bg-indigo-700
      disabled:cursor-not-allowed
      disabled:opacity-70
      "
    >
      {loading ? "Loading..." : title}
    </button>
  );
}

export default AuthButton; 