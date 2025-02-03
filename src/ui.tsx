// UI Components
import React, { ReactNode, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

// Input Component
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
};

// Card Component
interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

// Badge Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'solid', className }) => {
  return (
    <span
      className={classNames(
        'px-3 py-1 text-sm font-medium rounded-full',
        {
          'bg-gray-200 text-gray-800 border border-gray-400': variant === 'outline',
          'bg-blue-500 text-white': variant === 'solid',
        },
        className
      )}
    >
      {children}
    </span>
  );
};
