export default function Input({
  label,
  name,
  placeholder = '',
  type = 'text',
  error = '',
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={name} className="font-poppins ml-2 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="focus:outline-gray rounded-2xl border-2 px-4 py-2"
      />
      {!!error && <span className="font-poppins ml-2 text-xs text-red-600">{error}</span>}
    </div>
  );
}
