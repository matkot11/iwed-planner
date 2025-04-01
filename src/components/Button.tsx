export default function Button({
  id = '',
  variant,
  children,
  onClick,
}: {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
  id?: string;
}) {
  const variantStyles = {
    primary:
      'text-white hover:bg-white border-white bg-pink hover:text-pink active:bg-white active:text-pink',
    secondary:
      'text-pink hover:bg-pink border-white bg-white hover:text-white active:bg-pink active:text-white',
  };
  return (
    <button
      id={id}
      className={`${variantStyles[variant]} cursor-pointer rounded-2xl border-2 border-solid px-10 py-2 drop-shadow-lg transition-all duration-150`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
