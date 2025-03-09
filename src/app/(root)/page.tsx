import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Home' };
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function Home() {
  await delay(1000);
  return <div>Home</div>;
}
