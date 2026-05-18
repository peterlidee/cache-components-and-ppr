import { connection } from 'next/server';
import ClientChild from './ClientChild';

export default async function DynamicParent() {
  await connection();
  return (
    <div>
      <h1>**** Dynamic component</h1>
      <ClientChild />
    </div>
  );
}
