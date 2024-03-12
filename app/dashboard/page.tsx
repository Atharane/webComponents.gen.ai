import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import DashboardClient from './client';

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  (error || !data?.user) && redirect('/login');

  return (
    <div>
      <h1>welcome {data?.user?.email}</h1>
      <DashboardClient />
    </div>
  );
}
