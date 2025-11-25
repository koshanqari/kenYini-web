import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transform hover:scale-105 active:scale-95',
          {
            'bg-kanyini-primary text-white hover:bg-kanyini-dark focus:ring-kanyini-primary shadow-lg hover:shadow-xl':
              variant === 'primary',
            'bg-kanyini-secondary text-white hover:bg-gray-700 focus:ring-kanyini-secondary':
              variant === 'secondary',
            'border-2 border-kanyini-primary text-kanyini-primary hover:bg-kanyini-primary hover:text-white focus:ring-kanyini-primary':
              variant === 'outline',
            'text-kanyini-primary hover:bg-kanyini-primary/10 focus:ring-kanyini-primary':
              variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

