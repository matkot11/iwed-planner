export default function Button({
  id = '',
  variant = 'primary',
  children,
  className,
  onClick = () => {},
  disabled = false,
}: {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
  className?: string;
  disabled?: boolean;
}) {
  const variantStyles = {
    primary:
      'text-white hover:bg-white border-pink bg-pink hover:text-pink active:bg-white active:text-pink',
    secondary:
      'text-pink hover:bg-pink border-white bg-white hover:text-white active:bg-pink active:text-white',
  };
  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={`${variantStyles[variant]} ${className} disabled:bg-gray disabled:border-gray cursor-pointer rounded-2xl border-2 border-solid px-10 py-2 drop-shadow-lg transition-all duration-150 disabled:cursor-not-allowed disabled:hover:text-white disabled:active:text-white disabled:color-white`}
    >
      {children}
    </button>
  );
}
