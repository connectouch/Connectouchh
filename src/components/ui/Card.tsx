import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  glow = false 
}) => {
  return (
    <div
      className={cn(
        'glass-effect rounded-xl p-6',
        hover && 'card-hover cursor-pointer',
        glow && 'glow-border',
        className
      )}
    >
      {children}
    </div>
  );
};