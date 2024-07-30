import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Table from './components/Table';
import AddButton from './components/AddButton';

export default async function Dashboard() {
  const session = await getSession();

  if (!session || !session.user) {
    // This shouldn't happen due to middleware, but just in case:
    console.log('Dashboard: no session or user');
    redirect('/api/auth/login');
  }

  return (
    <div>
      <p>Welcome {session.user.given_name}!</p>
      <Table />
      <AddButton />
    </div>
  );
}
