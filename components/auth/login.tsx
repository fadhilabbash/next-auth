import { logIn } from "@/services/actions/auth-actions";
import Image from "next/image";

export default function LoginForm({ error }: { error?: string }) {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md rounded-tl-[80px] rounded-br-[80px]">
      <div className="flex flex-col items-center justify-center">
        <Image src="/nextauth.png" alt="" width={32} height={32} />
        <h2 className="text-2xl font-semibold text-center mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
  Sign In
</h2>
      </div>

      {error && (
        <p className="mb-4 text-red-500 text-center">
          Invalid credentials, please try again.
        </p>
      )}

      <form className="flex flex-col gap-4" action={logIn}>
        <label className="block">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Email</span>
          <input
            name="email"
            id="email"
            type="email"
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Password</span>
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
          className="w-full  text-white py-2 rounded-xl rounded-tl-[80px] rounded-br-[80px]  transition bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
