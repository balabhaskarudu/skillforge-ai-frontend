interface Props {
  onFileSelect: (
    file: File
  ) => void;
}

function UploadZone({
  onFileSelect,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      e.target.files &&
      e.target.files[0]
    ) {
      onFileSelect(
        e.target.files[0]
      );
    }
  };

  return (
    <div
      className="
      rounded-2xl
      border-2
      border-dashed
      border-indigo-300
      bg-white
      p-12
      text-center
      shadow-md
      "
    >
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
      />

      <p className="mt-5">
        Upload PDF, DOC, DOCX
      </p>
    </div>
  );
}

export default UploadZone;