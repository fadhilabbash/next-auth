import { logIn } from "@/services/actions/auth-actions";

export default function LoginForm({ error }: { error?: string }) {
  return (
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
  );
}
