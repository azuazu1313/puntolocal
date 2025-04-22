import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg',
    secondary: 'bg-primary-light hover:bg-primary-dark text-primary hover:text-white',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizeStyles = {
    small: 'text-sm py-2 px-4',
    medium: 'text-base py-3 px-6',
    large: 'text-lg py-4 px-8',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;