import { AppProvider } from './app-providers'
import './globals.css'
import type { AppProps } from 'next/app'

export function App({ Component, pageProps }: AppProps) {
    return <AppProvider><Component {...pageProps} /></AppProvider>
}
