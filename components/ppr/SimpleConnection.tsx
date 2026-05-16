import { connection } from 'next/server';

export default async function SimpleConnection() {
  await connection();
  return <div>Hello world!</div>;
}
