import { formatRelative } from 'date-fns';
import { uz } from 'date-fns/locale';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { DocsBody, DocsPage } from 'fumadocs-ui/page';

import { Edit } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { baseOptions } from '@/app/layout.config';
import { docs, type Page } from '@/app/source';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getInitials } from '@/utils/avatar';
import { createMetadata } from '@/utils/metadata';

import Image from 'next/image';
import { Control } from './page.client';

interface Param {
  slug: string[];
}

export default function Page({ params }: { params: Param }) {
  const page = docs.getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const lastUpdatedDate = page?.data?.updatedAt ?? page?.data?.createdAt;
  const formattedDate = lastUpdatedDate
    ? formatRelative(new Date(lastUpdatedDate), new Date(), { locale: uz })
    : undefined;

  const path = `content/docs/${page.file.path}`;
  const footer = (
    <a
      href={`${baseOptions.githubUrl}/blob/main/${path}`}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        buttonVariants({
          variant: 'outline',
          size: 'sm',
          className: 'gap-1.5 text-xs',
        })
      )}
    >
      <Edit className="size-3" />
      GitHubda tahrirlash
    </a>
  );

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
      full={page.data.full}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <div className="container relative rounded-xl border py-12 md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-8 text-sm text-fd-muted-foreground">{page.data.description}</p>
        {(page?.data?.authors ?? []).map((author) => (
          <div className="flex items-center gap-4" key={author.name}>
            {author?.avatar ? (
              <Image className="h-10 w-10 rounded-full" src={author.avatar} alt={author.name} />
            ) : (
              <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{getInitials(author.name)}</span>
              </div>
            )}
            <div className="font-medium dark:text-white">
              <a
                href={author?.telegram ?? '#'}
                rel="author"
                className="text-base font-bold text-gray-900 no-underline dark:text-white"
              >
                {author.name}
              </a>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <time dateTime={lastUpdatedDate as string} title={formattedDate}>
                  {formattedDate}
                </time>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute right-5 top-5">
          <Control url={page.url} />
        </div>
      </div>
      <DocsBody>
        <article>
          <page.data.exports.default />
        </article>
        {page.data.index ? <Category page={page} /> : null}
      </DocsBody>
    </DocsPage>
  );
}

function Category({ page }: { page: Page }): React.ReactElement {
  const filtered = docs
    .getPages()
    .filter((item) => item.file.dirname === page.file.dirname && item.file.name !== 'index');

  return (
    <Cards>
      {filtered.map((item) => (
        <Card
          key={item.url}
          title={item.data.title}
          description={item.data.description ?? 'No Description'}
          href={item.url}
        />
      ))}
    </Cards>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = docs.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const description = page.data.description ?? 'Udemere';

  const image = {
    alt: 'Banner',
    url: `https://udemere.uz/og.png`,
    width: 1200,
    height: 630,
  };

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `https://udemere.uz/og.png`,
      images: image,
    },
    twitter: {
      images: image,
    },
  });
}

export function generateStaticParams(): Param[] {
  return docs.getPages().map((page) => ({
    slug: page.slugs,
  }));
}
