import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import MainSection from './components/MainSection';
export default async function Page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (userId) {
    redirect('/admin/account');
  }

  return (
    <>
      <MainSection />
    </>
  );
}
