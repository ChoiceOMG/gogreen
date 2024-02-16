import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[10px] font-black font-Avenir uppercase  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-goGreen-green border-2 border-goGreen-green text-white  rounded-md hover:bg-transparent hover:text-goGreen-green transition-all duration-300 ease-in-out',
        secondary:
          'bg-newYellow border-2 border-newYellow text-goGreen-black  rounded-md hover:bg-transparent hover:text-newYellow transition-all duration-300 ease-in-out disabled:opacity-50',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        white:
          'bg-white border-2 border-goGreen-green text-goGreen-green hover:bg-goGreen-green hover:text-white transition-all duration-300 ease-in-out rounded-full',
        outline:
          'border border-input bg-goGreen-mint hover:bg-goGreen-mint/80 hover:text-accent-foreground disabled:opacity-0 transition-all duration-300 ease-in-out',
        green:
          'bg-goGreen-green border-goGreen-green border-2 text-white hover:bg-white hover:text-goGreen-green transition-all duration-300 ease-in-out disabled:opacity-0',
        black:
          'bg-goGreen-black border-goGreen-black border-2 text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out disabled:opacity-0',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-[50px] px-6',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  link?: string; // URL for Link
  linkProps?: Omit<React.ComponentProps<typeof Link>, 'href' | 'children'>; // Props for Link
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, link, linkProps, ...props },
    ref
  ) => {
    const Comp: React.ElementType = asChild ? Slot : link ? Link : 'button';
    const linkComponentProps = link ? { href: link, ...linkProps } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...linkComponentProps}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
