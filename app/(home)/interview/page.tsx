import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Card, Cards } from 'fumadocs-ui/components/card';

export default function Page() {
  const notAllowed = true;

  return (
    <main>
      <section className="py-16">
        <div className="container max-w-5xl">
          <h1 className="mb-2 text-2xl font-bold md:text-5xl">
            Savollar <Badge variant="outline">Tez kunda...</Badge>
          </h1>
          <p className="text-sm text-gray-500 md:text-lg">
            Bilim va ko&apos;nikmalaringizni sinab ko&apos;rish va yaxshilashga yordam beradigan testlar
          </p>
        </div>
      </section>
      <section className="bg-gray-200 py-10 pb-20 dark:bg-gray-900">
        <div className="container max-w-5xl">
          <Cards>
            <Card
              className={cn('interview-card', notAllowed ? 'cursor-not-allowed opacity-50' : '')}
              title="JavaScript"
              href={cn(notAllowed ? '#' : '/interview/javascript')}
              description="75 savollar · 14 mavzu"
            />
            <Card
              className={cn('interview-card', notAllowed ? 'cursor-not-allowed opacity-50' : '')}
              title="Node.JS"
              href={cn(notAllowed ? '#' : '/interview/nodejs')}
              description="36 savollar · 5 mavzu"
            />
            <Card
              className={cn('interview-card', notAllowed ? 'cursor-not-allowed opacity-50' : '')}
              title="React"
              href={cn(notAllowed ? '#' : '/interview/react')}
              description="51 savollar · 11 mavzu"
            />
            <Card
              className={cn('interview-card', notAllowed ? 'cursor-not-allowed opacity-50' : '')}
              title="Backend"
              href={cn(notAllowed ? '#' : '/interview/backend')}
              description="50 savollar · 3 mavzu"
            />
            <Card
              className={cn('interview-card', notAllowed ? 'cursor-not-allowed opacity-50' : '')}
              title="Frontend"
              href={cn(notAllowed ? '#' : '/interview/frontend')}
              description="30 savollar · 3 mavzu"
            />
            <Card
              className={cn('interview-card', notAllowed ? 'cursor-not-allowed opacity-50' : '')}
              title="Python"
              href={cn(notAllowed ? '#' : '/interview/python')}
              description="100 savollar · 15 mavzu"
            />
          </Cards>
        </div>
      </section>
    </main>
  );
}
