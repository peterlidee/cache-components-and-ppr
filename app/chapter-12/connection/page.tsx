import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import SimpleConnection from '@/components/ppr/SimpleConnection';
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback='...loading'>
        <SimpleConnection />
      </Suspense>
      <Footer />
    </>
  );
}
