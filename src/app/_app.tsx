import React from 'react';
import { AppProps } from 'next/app';
import Transition from '@/components/Transition';
import "@/components/transition.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}

export default MyApp;
