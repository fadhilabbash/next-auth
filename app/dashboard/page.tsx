import { auth } from "@/auth";
import { logout } from "@/services/actions/auth-actions";

export default async function Page() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <form action={logout}>
        <button type="submit">Sign Out</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
