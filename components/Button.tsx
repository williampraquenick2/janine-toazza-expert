import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  className = '', 
  variant = 'primary',
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95 text-lg";
  
  const variants = {
    primary: "bg-primary hover:bg-primaryDark text-white shadow-emerald-900/20",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-emerald-50"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span>{children}</span>
    </a>
  );
};