import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'beige' | 'gradient';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, background = 'white', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-20 md:py-28',
          {
            'bg-white': background === 'white',
            'bg-gray-50': background === 'gray',
            'bg-kanyini-beige': background === 'beige',
            'bg-gradient-to-br from-kanyini-beige via-white to-kanyini-light/10': background === 'gradient',
          },
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;

