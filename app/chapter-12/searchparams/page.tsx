import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import SimpleSearchParams from '@/components/ppr/SimpleSearchParams';
import { Suspense } from 'react';

export default function Page({
  searchParams,
}: PageProps<'/chapter-12/searchparams'>) {
  return (
    <>
      <Header />
      <Suspense fallback='...loading'>
        <SimpleSearchParams searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}
