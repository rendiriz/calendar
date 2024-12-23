import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/footer';
import { year } from '@/data/year';

export default function HomePage() {
  return (
    <>
      <main className="mx-auto w-full max-w-4xl px-4 py-8">
        <h1 className="mb-8 font-serif text-5xl font-extrabold">Kalender</h1>

        {year.map((item) => (
          <Link
            key={item.year}
            href={item.year.toString()}
          >
            <div className="mb-4 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <Image
                    src={`/${item.shio}`}
                    width={50}
                    height={50}
                    alt={`Shio ${item.year} logo`}
                  />
                  <span className="text-xl font-medium">{item.year}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <div className="mt-8 border-t">
        <div className="mx-auto w-full max-w-4xl p-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
