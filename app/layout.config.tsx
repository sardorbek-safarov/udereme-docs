import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout'
import { type DocsLayoutProps } from 'fumadocs-ui/layout'

import { NavigationChildren } from '@/app/layout.client'
import { docs } from '@/app/source'
import { LogoIcon } from '@/components/icons'
import { modes } from '@/utils/modes'
import { BookIcon } from 'lucide-react'

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <LogoIcon />,
    transparentMode: 'top',
    children: <NavigationChildren />,
  },
  githubUrl: 'https://github.com/udemere/udereme-docs',
  links: [
    {
      text: 'Interview Q&A',
      type: 'main',
      url: '/interview',
      icon: <BookIcon />,
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
