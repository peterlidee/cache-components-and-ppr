import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
import DynamicParent from '@/components/ppr/DynamicParent';

import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback='...loading'>
        <DynamicParent />
      </Suspense>
      <Footer />
    </>
  );
}
