'use client';
import { LogoIcon } from '@/components/icons';
import Link from 'next/link';

const SiteFooter = () => {
  return (
    <footer className="bg-background border-t py-10">
      <div className="container">
        <div className="space-y-5">
          <Link href="/">
            <LogoIcon />
            <span className="sr-only">Udemere icon</span>
          </Link>
          <span className="inline-block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Built with ❤️ by
            <Link href="https://miracleprogrammer.com" className="hover:underline" target="blank">
              &nbsp;Shakhbozbek Usmonov
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
