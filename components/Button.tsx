import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-colors duration-300 ease-in-out font-medium tracking-wide";
  
  const variants = {
    primary: "bg-[#2D2D2D] text-[#F9F8F6] hover:bg-[#5C5C48]",
    secondary: "bg-[#EBEAE6] text-[#2D2D2D] hover:bg-[#DCDCDC]",
    outline: "border border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-[#F9F8F6]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

