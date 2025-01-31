'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { type ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { modes } from '@/utils/modes';

const itemVariants = cva('rounded-md px-2 py-1 transition-colors hover:text-fd-foreground', {
  variants: {
    active: {
      true: 'bg-fd-accent text-fd-accent-foreground',
    },
  },
});

export function Body({ children }: { children: ReactNode }): React.ReactElement {
  const mode = useMode();

  return <body className={cn(mode, 'flex min-h-screen flex-col')}>{children}</body>;
}

export function NavigationChildren(): React.ReactElement {
  const mode = useMode();

  return (
    <div className="scrollbar-hide rounded-md border bg-fd-muted/80 p-1 text-sm text-fd-muted-foreground max-md:absolute max-md:left-36 max-md:w-[190px] max-md:-translate-x-1/2 max-md:overflow-x-scroll max-md:text-center md:relative">
      {modes.map((m) => (
        <Link key={m.param} href={`/docs/${m.url}`} className={itemVariants({ active: m.param === mode })}>
          {m.name}
        </Link>
      ))}
    </div>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}
