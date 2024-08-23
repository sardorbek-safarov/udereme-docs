import { type LucideIcon } from 'lucide-react';
import React from 'react';

import { CSSIcon, HTMLIcon, JSIcon } from '@/components/icons';

export interface Mode {
  param: string;
  url: string;
  name: string;
  description: string;
  icon: LucideIcon | React.ElementType<React.SVGProps<SVGSVGElement>>;
}

export const modes: Mode[] = [
  {
    param: 'html',
    url: '/html',
    name: 'HTML',
    description: '',
    icon: HTMLIcon,
  },
  {
    param: 'css',
    url: '/css',
    name: 'CSS',
    description: '',
    icon: CSSIcon,
  },
  {
    param: 'js',
    url: '/js',
    name: 'JavaScript',
    description: '',
    icon: JSIcon,
  },
  // {
  //   param: 'ts',
  //   url: '/ts',
  //   name: 'TypeScript',
  //   description: '',
  //   icon: TSIcon,
  // },
  // {
  //   param: 'python',
  //   url: '/py',
  //   name: 'Python',
  //   description: '',
  //   icon: PyIcon,
  // },
];
