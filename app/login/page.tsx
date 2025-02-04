import { logIn } from "@/services/actions/auth-actions";

interface searchParamsProps {
  searchParams: {
    error: string;
  };
}
export default async function SignInPage({ searchParams }: searchParamsProps) {
  const search = await searchParams;
  const error = search.error;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

        {error && (
          <p className="mb-4 text-red-500 text-center">
            Invalid credentials, please try again.
          </p>
        )}

        <form className="flex flex-col gap-4" action={logIn}>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              name="email"
              id="email"
              type="email"
              required
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              name="password"
              id="password"
              type="password"
              required
              className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
