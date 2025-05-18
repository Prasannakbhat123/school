// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'lavender' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer';

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-black text-white hover:bg-gray-800 focus:ring-black shadow-md hover:shadow-lg';
      break;
    case 'secondary':
      variantStyles =
        'bg-white text-black border border-black hover:bg-gray-100 focus:ring-black shadow-sm hover:shadow-md';
      break;
    case 'ghost':
      variantStyles =
        'bg-transparent text-current border-2 border-current hover:bg-white hover:text-[#6a4c93] focus:ring-current';
      break;
    case 'lavender':
      variantStyles = 
        'bg-gradient-to-r from-[#6a4c93] to-[#8a64b8] text-white hover:from-[#5a3c83] hover:to-[#7a54a8] focus:ring-[#8a64b8] shadow-md hover:shadow-lg';
      break;
    case 'outline':
      variantStyles = 
        'bg-transparent text-[#6a4c93] border-2 border-[#8a64b8] hover:bg-[#8a64b8]/10 focus:ring-[#8a64b8]';
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
