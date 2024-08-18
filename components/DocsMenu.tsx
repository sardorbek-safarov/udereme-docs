import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { modes } from '@/utils/modes';
import Link from 'next/link';

const DocsMenu = () => {
  return (
    <section className='mb-20'>
      <div className="container">
        <h2 className="sr-only">Dokumentatsiya</h2>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((m) => (
            <li key={m.param}>
              <Card>
                <CardHeader>
                  {<m.icon />}
                  <Link href={`/docs/${m.url}`}>
                    <CardTitle className='hover:underline'>{m.name}</CardTitle>
                  </Link>
                  <CardDescription>{m.description}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DocsMenu;
