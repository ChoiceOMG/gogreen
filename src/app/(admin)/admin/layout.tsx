import { getSession } from 'next-auth/react';
import { Providers } from './providers';

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return <Providers session={session}>
      {children}
    </Providers>

}
