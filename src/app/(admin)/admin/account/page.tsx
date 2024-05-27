import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getUser } from '@/services/data';
import { getServerSession } from 'next-auth';
import MainSection from './components/MainSection';

export default async function Page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const user = await getUser(userId as string);

  return <MainSection user={user} />;
}
