import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { z } from 'zod';

import { map } from '@/.map';
import { CSSIcon, HTMLIcon, JSIcon } from '@/components/icons';
import { create } from '@/components/ui/icon';

type SVGComponentProps = SVGProps<SVGSVGElement>;

type IconMap = {
  [key: string]: ForwardRefExoticComponent<SVGComponentProps & RefAttributes<SVGSVGElement>>;
};

export const docs = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  icon(iconName) {
    const customIconMap: IconMap = {
      HTMLIcon,
      CSSIcon,
      JSIcon,
    };

    if (iconName && iconName in customIconMap) {
      return create({ icon: customIconMap[iconName] });
    } else if (iconName && iconName in icons) {
      return create({ icon: icons[iconName as keyof typeof icons] });
    }
  },
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        preview: z.string().optional(),
        index: z.boolean().default(false),
        authors: z.array(
          z.object({ name: z.string(), avatar: z.string().optional(), telegram: z.string().optional() })
        ),
        createdAt: z.string().date().or(z.date()).optional(),
        updatedAt: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export const interview = loader({
  baseUrl: '/interview',
  rootDir: 'interview',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        preview: z.string().optional(),
        index: z.boolean().default(false),
        authors: z.array(
          z.object({ name: z.string(), avatar: z.string().optional(), telegram: z.string().optional() })
        ),
        createdAt: z.string().date().or(z.date()).optional(),
        updatedAt: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export type Page = InferPageType<typeof docs>;
export type Meta = InferMetaType<typeof docs>;
