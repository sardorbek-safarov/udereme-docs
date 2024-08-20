import { HomeLayout } from 'fumadocs-ui/home-layout';
import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import SiteFooter from '@/components/SiteFooter';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <SiteFooter />
    </HomeLayout>
  );
}
