import { signOut } from '../lib/auth/auth';

export default async function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <button>Sign Out</button>
      </form>
    </div>
  );
}
