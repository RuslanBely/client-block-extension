import { AppProvider } from './app-providers';
import './globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
