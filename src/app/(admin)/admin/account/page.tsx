import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import MainSection from './components/MainSection';
import { getUser } from '@/app/services/data';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const user = await getUser(userId as string);

  return <MainSection user={user} />;
}
