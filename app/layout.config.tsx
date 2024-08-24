import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { type DocsLayoutProps } from 'fumadocs-ui/layout';

import { NavigationChildren } from '@/app/layout.client';
import { docs } from '@/app/source';
import { LogoIcon, MobileLogoIcon } from '@/components/icons';
import { modes } from '@/utils/modes';
import { BookIcon, Code } from 'lucide-react';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        {/* Use CSS to determine which logo to show */}
        <div className="hidden md:block">
          <LogoIcon /> {/* Desktop logo */}
        </div>
        <div className="block md:hidden">
          <MobileLogoIcon /> {/* Mobile logo */}
        </div>
      </>
    ),
    transparentMode: 'top',
    children: <NavigationChildren />,
  },
  githubUrl: 'https://github.com/udemere/udereme-docs',
  links: [
    {
      icon: <BookIcon />,
      text: 'Interview Q&A',
      url: '/interview',
      active: 'nested-url',
    },
    {
      icon: <Code />,
      text: 'Code Editor',
      url: 'https://editor.udemere.uz',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docs.pageTree,

  sidebar: {
    banner: (
      <RootToggle
        options={modes.map((mode) => ({
          url: `/docs/${mode.param}`,
          icon: (
            <mode.icon
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
                color: `hsl(var(--${mode.param}-color))`,
              }}
            />
          ),
          title: mode.name,
          description: mode.description,
        }))}
      />
    ),
  },
};
